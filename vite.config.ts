// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// import typescript2 from 'rollup-plugin-typescript2';
// import dts from "vite-plugin-dts";

// export default defineConfig({
//   plugins: [
//     vue(),
//     dts({
//       insertTypesEntry: true,
//     }),
//     typescript2({
//       check: false,
//       include: ["src/components/**/*.vue"],
//       tsconfigOverride: {
//         compilerOptions: {
//           outDir: "dist",
//           sourceMap: true,
//           declaration: true,
//           declarationMap: true,
//         },
//       },
//       exclude: ["vite.config.ts"]
//     })
//   ],
//   build: {
//     cssCodeSplit: true,
//     lib: {
//       // Could also be a dictionary or array of multiple entry points
//       entry: "src/components/index.ts",
//       name: 'VueMagicZoom',
//       formats: ["es", "cjs", "umd"],
//       fileName: format => `vue-magic-zoom.${format}.js`
//     },
//     rollupOptions: {
//       // make sure to externalize deps that should not be bundled
//       // into your library
//       input: {
//         main: path.resolve(__dirname, "src/components/index.ts")
//       },
//       external: ['vue'],
//       output: {
//         assetFileNames: (assetInfo) => {
//           if (assetInfo.name === 'main.css') return 'vue-magic-zoom.css';
//           return String(assetInfo.name);
//         },
//         exports: "named",
//         globals: {
//           vue: 'Vue',
//         },
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// })
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({
    reactivityTransform: true,
  })], // to process SFC
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-magic-zoom',
      formats: ['es'], // adding 'umd' requires globals set to every external module
      fileName: (format: string) => `vue-magic-zoom.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ['vue'], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
});