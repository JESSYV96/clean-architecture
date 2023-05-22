// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap' }
            ],
            style: [
                { children: "body { font-family: 'Josefin Sans', roboto }" }
            ],
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/google-fonts',
        '@nuxt/image-edge',
    ],
})
