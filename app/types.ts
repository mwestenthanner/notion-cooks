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
    content?: Object
}