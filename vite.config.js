import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // console.log('env ############################ lllllllllllllllll ', env)
  // console.log('env ############################ lllllllllllllllll ')
  return defineConfig({
    define: {
      'process.env': env
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.js'),
        name: 'bookingSystem',
        fileName: 'bookingSystem'
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue'
          }
        }
      },
      // important pendant le developpment, mais false pour la production.
      sourcemap: true,
      minify: false,
      cssMinify: false,
      polyfillDynamicImport: false
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    //source pour la contruction n'est pas encore pris en charge.
    // https://github.com/vitejs/vite/issues/11480
    // https://github.com/vitejs/vite/issues/2830
    css: {
      devSourcemap: true
    }
  })
}
