<template>
    <div class="card card-body shadow-xl rounded-none p-3">
        <div class="flex flex-row gap-4">
            <div class="grid grid-rows-3 grid-flow-col">
                <div>
                    <nuxt-img :src="product.photos[0]" loading="lazy" :width="151" :height="155" />
                </div>
                <div>
                    <nuxt-img :src="product.photos[1]" loading="lazy" :width="151" :height="155" />
                </div>
                <div>
                    <nuxt-img :src="product.photos[2]" loading="lazy" :width="151" :height="155" />
                </div>
                <div class="row-span-3 flex items-center justify-center">
                    <nuxt-img class="rotate-90" :src="product.photos[3]" loading="lazy" :width="375" :height="375" />
                </div>
            </div>
            <div>
                <!-- {{ product }} -->
                <h3>{{ product.title }}</h3>
                <span>{{ product.price }}</span>
                <p>{{ product.description }}</p>
                <p>Category : {{ product.category }}</p>
                <button @click="addProductToCart">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProductItem } from '~~/../../core/lib/domain/models/Product.model';

const props = defineProps<{
    product: ProductItem
}>()

const addProductToCart = () => {
    console.log("Produit ajouté")
}
</script>

<style scoped></style>