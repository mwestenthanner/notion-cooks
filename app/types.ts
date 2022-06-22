export interface Recipe {
    id: string
    title: string
    desc: string
    img: string
    category: string
    slug: string
    tags: Array<string>
    time: number
    collections: Array<string>
    content?: Record<string, unknown>
}