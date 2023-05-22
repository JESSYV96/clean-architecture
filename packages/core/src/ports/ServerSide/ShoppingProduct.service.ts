import type { ProductItem, RelatedProduct } from "../../domain/models/Product.model";

export interface ShoppingProductsService {
    getFeaturedProducts: () => Promise<ProductItem[]>
    getLatestProducts: () => Promise<ProductItem[]>
    getProductsByCategories: (categories: string[]) => Promise<ProductItem[]>
    getRelatedProducts: (category: string) => Promise<RelatedProduct[]>
    getProduct: (productId: number) => Promise<ProductItem>
}