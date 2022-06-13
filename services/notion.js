const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

const database_id = process.env.NOTION_DATABASE_ID

module.exports = async function getRecipes () {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST',
      }
    
    const { results } = await notion.request(payload)
    
    const recipes = results.map((page) => {
        return {
          id: page.id,
          title: page.properties.Name.title[0].text.content,
          desc: page.properties.Desc.rich_text[0].text.content,
          img: page.properties.Image.files[0].file.url,
          category: page.properties.Category.select.name,
          tags: page.properties.Tags.multi_select.map((tag) => { return tag.name }),
          time: page.properties.Time.select.name,
          collection: page.properties.Collections.multi_select.map((collection) => { return collection.name }),
        }
      })
    
      return recipes;
}