import { ProductItem } from "../../../domain/models/Product.model";
import { ShoppingProductsService } from "../../../ports/ServerSide/ShoppingProduct.service";
import { IGetFeaturedProducts } from "../../../ports/UserSide/usecases/GetFeaturedProducts.port";

type FeaturedProductsOutput = Promise<ProductItem[]>

// export class GetFeaturedProducts implements IGetFeaturedProducts {
//     productService: ShoppingProductsService

//     constructor(readonly _productService: ShoppingProductsService) {
//         this.productService = _productService
//     }

//     async execute(): FeaturedProductsOutput {
//         const products = await this.productService.getFeaturedProducts()
//         return products
//     }
// }

export const getFeaturedProducts = (productService: ShoppingProductsService): IGetFeaturedProducts => {
    return {
        async execute(): FeaturedProductsOutput {
            const products = await productService.getFeaturedProducts()
            return products
        }
    }
} 