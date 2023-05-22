import { ShoppingProductsService } from "@jessyv96/core/lib/ports/ServerSide/ShoppingProduct.service"
import { ProductItemDTO, mapToProductModel, mapToRelatedProductModel } from "./Product.dto";
import type { ProductItem, RelatedProduct } from "@jessyv96/core/lib/domain/models/Product.model";

// 
export const productService = (): ShoppingProductsService => {

    const getProduct = async (productId: number): Promise<ProductItem> => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${productId}`)
            const productFromAPI: ProductItemDTO = await response.json()
            return mapToProductModel(productFromAPI)
        } catch (error) {
            console.error(error)
        }
    }

    const getFeaturedProducts = async (): Promise<ProductItem[]> => {
        const response = await fetch('https://dummyjson.com/products?limit=4')
        const { products: productsFromAPI } = await response.json()
        return productsFromAPI.map((product: ProductItemDTO) => mapToProductModel(product))
    }

    const getRelatedProducts = async (category: string): Promise<RelatedProduct[]> => {
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=4`)
            const { products: productsFromAPI } = await response.json()
            return productsFromAPI.map((product: ProductItemDTO) => mapToRelatedProductModel(product))
        } catch (error) {
            console.error(error)
        }
    }

    const getLatestProducts = async () => {
        return []
    }

    const getProductsByCategories = async () => {
        return []
    }

    return {
        getProduct,
        getFeaturedProducts,
        getRelatedProducts,
        getLatestProducts,
        getProductsByCategories
    }
}