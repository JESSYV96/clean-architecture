import { defineConfig } from 'tsup'
// TODO tester si sans les export index.ts ça fonctionne
export default defineConfig((options) => {
    return {
        entry: ['src/index.ts'],
        format: "esm",
        minify: !options.watch,
        dts: true
    }
})