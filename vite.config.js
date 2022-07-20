/*
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()]
})
*/

// vite.config.js
import vue from '@vitejs/plugin-vue'
import { resolve} from 'path'
import { fileURLToPath } from 'url'
//const { sassTrue } = pkg;

export default {
    plugins: [vue({
        customElement: true,
        template: {
            compilerOptions: {
                // ...
            },
            transformAssetUrls: {
                // ...
            }
        }
    })],
    build: {
        rollupOptions: {
            /*input: {
                index: fileURLToPath(new URL('./index.html', import.meta.url)),
                landing: fileURLToPath(new URL('./src/js/landing.js', import.meta.url)),
                reverseMatching: fileURLToPath(new URL('./src/js/reverseMatching.js', import.meta.url)),
            },
            output: {
                entryFileNames: '[name].js',
                dir: './webroot/js'
            }*/
        },
        //cssCodeSplit: true,
        transpileDependencies: true,
        devServer: {https: true},
    }
}
