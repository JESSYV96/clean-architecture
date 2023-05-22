<script setup lang="ts">

</script>

<template>
    <section class="h-12 py-10 px-40 flex items-center justify-between">
        <div class="">
            Hekto
        </div>
        <ul class="flex gap-4 justify-center">
            <NuxtLink to="/">Home</NuxtLink>
            <li>Pages</li>
            <li>Products</li>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
        <div class="form-control">
            <div class="input-group">
                <input type="text" placeholder="Search…" class="input input-bordered input-sm" />
                <button class="btn btn-square btn-sm bg-pink">
                    <Icon name="mdi:magnify" />
                </button>
            </div>
        </div>
    </section>
</template>
