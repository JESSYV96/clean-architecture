<template>
    <main>
        <Header />
        <AppBar />
        <section class="h-64 bg-pantonePurple">
            <slot name="bannerContent" />
        </section>
        <div class="container px-36 mt-8">
            <slot name="body" />
        </div>
    </main>
</template>