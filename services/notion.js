const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

const database_id = process.env.NOTION_DATABASE_ID
const collections_id = process.env.NOTION_COLLECTION_DB_ID

async function getRecipes () {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST',
      }
    
    const { results } = await notion.request(payload)

    const recipes = await Promise.all(results.map(async (page) => {
      try {
      
        return {
          id: page.id,
          title: page.properties.Name.title[0].text.content,
          desc: page.properties.Desc.rich_text[0].text.content,
          img: page.properties.Image.files[0].file.url,
          category: page.properties.Category.select.name,
          slug: page.properties.Slug.formula.string,
          tags: page.properties.Tags.multi_select.map((tag) => { return tag.name }),
          time: page.properties.Time.select.name,
          collections: page.properties.Collections.relation.map((collection) => { return collection.id }),
          content: await getRecipeContent(page.id)
        }

      } catch(err) {
          throw err;
      }
    }));

    console.log(recipes)
    
    return recipes;
}

async function getRecipeContent(pageId) {

  const content = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  })
    
  const recipeContent = {
    ingredientsHeading: content.results[0].heading_2.rich_text[0].plain_text,
    ingredientsList: await getTableContent(content.results[1].id),
    prepHeading: content.results[2].heading_2.rich_text[0].plain_text,
    prepList: getListItems(content.results)
  }
  
  return recipeContent;
}

async function getCollections() {

    const payload = {
      path: `databases/${collections_id}/query`,
      method: 'POST',
    }

    const { results } = await notion.request(payload)

    const collections = await Promise.all(results.map(async (page) => {
      try {
      
        return {
          id: page.id,
          title: page.properties.Name.title[0].text.content,
          subheading: page.properties.Subheading.rich_text[0].text.content,
          desc: page.properties.Description.rich_text[0].text.content,
          img: page.properties.Image.files[0].file.url,
          slug: page.properties.Slug.formula.string 
        }

      } catch(err) {
          throw err;
      }
    }));

    return collections;
}

// Parses Notion simple tables, but only 2 cells per row
async function getTableContent (tableId) {

  const content = await notion.blocks.children.list({
    block_id: tableId,
    page_size: 50,
  })

  const tableContent = content.results.map((object) => {
    return {
      quantity: object.table_row.cells[0][0] == undefined ? '' : object.table_row.cells[0][0].plain_text,
      ingredient: object.table_row.cells[1][0] == undefined ? '' : object.table_row.cells[1][0].plain_text
    }

  })

  return tableContent

}

function getListItems (list) {

  result = []

  list.forEach(element => {

    if (element.type == 'numbered_list_item') {
      result.push(element.numbered_list_item.rich_text[0].plain_text);
    }
    
  });

  return result;

}

module.exports = { getRecipes, getRecipeContent, getCollections }