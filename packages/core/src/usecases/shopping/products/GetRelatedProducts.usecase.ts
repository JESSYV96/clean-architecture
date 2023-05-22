import type { RelatedProduct } from "../../../domain/models/Product.model"
import { ShoppingProductsService } from "../../../ports/ServerSide/ShoppingProduct.service"

export const getRelatedProducts = (productService: ShoppingProductsService, category: string) => {
    return {
        async execute(): Promise<RelatedProduct[]> {
            const relatedProducts = await productService.getRelatedProducts(category)
            return relatedProducts
        }
    }
} 