<script setup lang="ts">
import { getFeaturedProducts } from "@jessyv96/core/lib/usecases/shopping/products/GetFeaturedProducts.usescase"
import { productService } from "@jessyv96/infrastructure/lib/api/ProductService.adapter"
import SupportCardItem from "~~/components/shopping/SupportCardItem.vue";

const { pending, data: featuredProducts } = useLazyAsyncData('featuredProducts', () => getFeaturedProducts(productService()).execute())

</script>

<template>
  <NuxtLayout>
    <template v-slot:bannerContent>
      photo
    </template>
    <template v-slot:body>
      <section class="flex flex-col items-center">
        <h2 class="font-bold text-3xl text-blueNavy my-8">Featured products</h2>
        <article v-if="!pending" class="flex flex-row gap-5">
          <ShoppingProductCardItem v-for="product in featuredProducts" :key="product.id" :product="product" />
        </article>
      </section>
      <section class="flex flex-col items-center">
        <h2 class="font-bold text-3xl text-blueNavy my-8">What Shoppex Offer !</h2>
        <article class="flex flex-row gap-5">
          <SupportCardItem v-for="n in 4" :key="n" />
        </article>
      </section>
    </template>
  </NuxtLayout>
</template>
