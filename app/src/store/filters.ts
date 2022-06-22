import { Recipe } from "types";


/* Simple search; only searching for matches in recipe name and tags */
export function simpleSearch(list: Array<Recipe>, searchTerm: string) {

    if (searchTerm.length == 0) {
        return list;
      }

      else return list.filter(item => {

        if (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || JSON.stringify(item.tags).toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        } else return false;
      
    })

}

/* Advanced search: searches entire recipe item */
export function advancedSearch(list: Array<Recipe>, searchTerm: string) {

    if (searchTerm.length == 0) {
        return list;
      }

      else return list.filter(item => {

        if (JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        } else return false;
      
    })

}

export function filterByTime(list: Array<Recipe>, time: number) {
    if (time == 0) {
        return list;
    }

    else return list.filter(item => {

        if(time >= item.time) {
            return true;
        } else return false;
      
    })
}

export function filterByTags(list: Array<Recipe>, filterTags: Array<string>, tags: Array<{ name: string; slug: string; img: string; }>) {
    
    if (filterTags.length == 0) {
        return list;
    }

    else return list.filter(recipe => {

        // convert recipe tags into full tag objects
        let filter = false;
        const recipeTags = getRecipeTagObjects(recipe, tags);

        // compare tag objects with filter tags
        filterTags.forEach(element => {
            recipeTags.forEach(recipeTag => {
                if(element == recipeTag.name || element == recipeTag.slug) {
                    filter = true;
                }
            });
        });

        return filter;
      
    })

    

}

export function getRecipeTagObjects(recipe: Recipe, tags: Array<{ name: string; slug: string; img: string; }>) {

    return tags.filter(tag => {

        if(recipe.tags.includes(tag.name)) {
            return true;
        } else return false;
      
    })

}

export function createSlug(tag: string) {

    // Remove Umlaut/Accents
    tag = tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Replace spaces with dashes
    tag = tag.replace(/\s+/g, '-')

    return tag.toLowerCase();

}

export function matchTagImage(tagName: string) {

    try {
        require('../../public/img/filters/' + tagName + '.svg')
        return '/img/filters/' + tagName + '.svg';
      } catch (e) {
        return '/img/filters/default.svg';
    }

    

}