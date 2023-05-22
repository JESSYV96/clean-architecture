<script setup lang="ts">
import { ProductItem } from '~~/../../core/lib/domain/models/Product.model';

defineProps<{ product: ProductItem }>()

const isProductCardHovered = ref<boolean>(false)


const displayActionButtons = (payload: MouseEvent) => {
    isProductCardHovered.value = true
}

const hideActionButtons = (payload: MouseEvent) => {
    isProductCardHovered.value = false
}

</script>

<template>
    <div @mouseenter="displayActionButtons" @mouseleave="hideActionButtons" class="card w-48 h-64 bg-base-100 shadow-xl"
        :class="{
            'hover:bg-blue': isProductCardHovered,
            'hover:text-white': isProductCardHovered
        }">
        <figure class="relative h-24">
            <img :src="product.thumbnail" />
            <div v-if="isProductCardHovered" class="flex gap-1 absolute left-3 top-2">
                <button class="btn btn-circle btn-xs">
                    <Icon name="mdi:cart-outline" />
                </button>
                <button class="btn btn-circle btn-xs">
                    <Icon name="mdi:cards-heart-outline" />
                </button>
                <button class="btn btn-circle btn-xs">
                    <Icon name="mdi:magnify-plus-outline" />
                </button>
            </div>
            <NuxtLink v-if="isProductCardHovered" :to="`/products/${product.id}`"
                class="btn btn-success btn-xs text-white normal-case rounded-none absolute bottom-3">
                View details
            </NuxtLink>
        </figure>
        <div class="card-body text-center">
            <h3>{{ product.title }}</h3>
            <p>Code - Y523201</p>
            <p>{{ product.price }} €</p>
        </div>
    </div>
</template>


