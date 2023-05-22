export type ProductItem = {
    id: number
    title: string
    description: string
    price: number
    rating: number
    brand: string
    category: string
    thumbnail: string
    photos: string[]
}


export type RelatedProduct = Pick<ProductItem, "id" | "title" | "thumbnail" | "price" | "rating">

