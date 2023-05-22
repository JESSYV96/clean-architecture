import type { ProductItem, RelatedProduct } from "@jessyv96/core/lib/domain/models/Product.model"

export type ProductItemDTO = {
    id: number
    title: string
    description: string
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string
    images: string[]
}

// Transform to FP style ?
export function mapToProductModel(productFromAPI: ProductItemDTO): ProductItem {
    const { id, title, description, rating, price, brand, category, thumbnail, images } = productFromAPI
    return {
        id,
        title,
        description,
        price,
        rating,
        brand,
        category,
        thumbnail,
        photos: images
    }
}

export function mapToRelatedProductModel(productFromAPI: ProductItemDTO): RelatedProduct {
    const { id, title, rating, price, thumbnail } = productFromAPI
    return {
        id,
        title,
        price,
        rating,
        thumbnail
    }
}