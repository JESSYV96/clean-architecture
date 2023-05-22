import { ProductItem } from "../../../domain/models/Product.model";

export interface IGetFeaturedProducts {
    execute: () => Promise<ProductItem[]>
}