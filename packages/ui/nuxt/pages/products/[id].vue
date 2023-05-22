<script setup lang="ts">
import { getSingleProduct } from "@jessyv96/core/lib/usecases/shopping/products/GetSingleProduct.usecase"
import { getRelatedProducts } from "@jessyv96/core/lib/usecases/shopping/products/GetRelatedProducts.usecase"
import { productService } from "@jessyv96/infrastructure/lib/api/ProductService.adapter"
import RelatedProduct from "~~/components/shopping/RelatedProduct.vue"
import ProductDetailsItem from "~~/components/shopping/ProductDetailsItem.vue"

const route = useRoute()
const productId: string = route.params.id as string
const { data: product } = await useAsyncData('product', () => getSingleProduct(productService(), productId).execute())
const { data: relatedProducts } = await useAsyncData('relatedProducts', () => getRelatedProducts(productService(), product.value!.category).execute())


</script>

<template>
  <NuxtLayout>
    <template v-slot:bannerContent>
      Product details page
    </template>
    <template v-slot:body>
      <section class="py-4">
        <ProductDetailsItem v-if="product" :product="product" />
      </section>
      <section class="py-4 bg-pantonePurple bg-opacity-30">
        Description
      </section>
      <section class="flex flex-row gap-5 py-4">
        <RelatedProduct v-for="relatedProduct in relatedProducts" :key="relatedProduct.id"
          :relatedProduct="relatedProduct" />
      </section>
    </template>
  </NuxtLayout>
</template>


