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

export function filterByTime(list: Array<Recipe>, time: Array<string>) {
    if (time.length == 0) {
        return list;
    }

    else return list.filter(item => {

        if(time.includes(item.time)) {
            return true;
        } else return false;
      
    })
}

export function filterByTags(list: Array<Recipe>, filterTags: Array<string>, tags: Array<{ name: string; slug: string; }>) {
    
    if (filterTags.length == 0) {
        return list;
    }

    else return list.filter(recipe => {

        // convert recipe tags into full tag objects
        let filter = false;
        const recipeTags = getRecipeTagObjects(recipe, tags);

        // compare tag objects with filter tags
        filterTags.forEach(element => {
            if (JSON.stringify(recipeTags).includes(element)) {
                filter = true;
            }
        });

        return filter;
      
    })

    

}

export function createSlug(tag: string) {

    // Remove Umlaut/Accents
    tag = tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Replace spaces with dashes
    tag = tag.replace(/\s+/g, '-')

    return tag.toLowerCase();

}

export function getRecipeTagObjects(recipe: Recipe, tags: Array<{ name: string; slug: string; }>) {

    return tags.filter(tag => {

        if(recipe.tags.includes(tag.name)) {
            return true;
        } else return false;
      
    })

}