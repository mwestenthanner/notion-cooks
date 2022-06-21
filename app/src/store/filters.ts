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