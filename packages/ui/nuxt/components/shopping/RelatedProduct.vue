<script setup lang="ts">
import { RelatedProduct } from '@jessyv96/core/lib/domain/models/Product.model';

const props = defineProps<{
    relatedProduct: RelatedProduct
}>()
</script>


<template>
    <article>
        <img class="h-80 w-60" :src="relatedProduct.thumbnail" />
        <aside class="flex flex-row justify-between my-2">
            <span class="text-sm">{{ relatedProduct.title }}</span>
            <p class="text-sm">{{ relatedProduct.rating }}</p>
        </aside>
        <p class="text-sm">{{ relatedProduct.price }}</p>
    </article>
</template>
