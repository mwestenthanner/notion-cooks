export interface Recipe {
    id: string
    title: string
    desc: string
    img: string
    category: string
    slug: string
    tags: Array<string>
    time: string
    collections: Array<string>
    ingredientsHeading?: string
    ingredientsList?: Array<string>
    prepHeading?: string
    prepList?: Array<string>
}