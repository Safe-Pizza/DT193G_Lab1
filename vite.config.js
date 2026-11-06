import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, "index.html"),
                tailwind: resolve(import.meta.dirname, "tailwind.html"),
                bootstrap: resolve(import.meta.dirname, "bootstrap.html"),
                publish: resolve(import.meta.dirname, "publish.html")
            }
        }
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                quietDeps: true,
            },
        },
    },
    plugins: [
        tailwindcss()
    ],

})
