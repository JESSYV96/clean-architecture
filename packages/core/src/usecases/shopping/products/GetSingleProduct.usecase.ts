import { product1Mock } from "../../../domain/mocks/products.mocks"
import { ProductItem } from "../../../domain/models/Product.model"
import { ShoppingProductsService } from "../../../ports/ServerSide/ShoppingProduct.service"

type SingleProductOutput = Promise<ProductItem>

export const getSingleProduct = (productService: ShoppingProductsService, productId: number | string) => {
    return {
        async execute(): SingleProductOutput {
            const id = typeof productId === 'string' ? parseInt(productId) : productId
            const product = await productService.getProduct(id)
            return product
        }
    }
} 