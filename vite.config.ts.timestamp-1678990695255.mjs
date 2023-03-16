// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/komi/www/vue-magic-zoom/node_modules/.pnpm/vite@4.2.0_@types+node@18.15.3/node_modules/vite/dist/node/index.js";
import vue from "file:///home/komi/www/vue-magic-zoom/node_modules/.pnpm/@vitejs+plugin-vue@4.1.0_vite@4.2.0+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import cssInjectedByJsPlugin from "file:///home/komi/www/vue-magic-zoom/node_modules/.pnpm/vite-plugin-css-injected-by-js@3.1.0_vite@4.2.0/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import dts from "file:///home/komi/www/vue-magic-zoom/node_modules/.pnpm/vite-plugin-dts@2.1.0_55j2zwyrixw4q2c2olnaswzcha/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/komi/www/vue-magic-zoom";
var __vite_injected_original_import_meta_url = "file:///home/komi/www/vue-magic-zoom/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin(), dts()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      name: "VueMagicZoom",
      // the proper extensions will be added
      fileName: (format) => `vue-magic-zoom.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9rb21pL3d3dy92dWUtbWFnaWMtem9vbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUva29taS93d3cvdnVlLW1hZ2ljLXpvb20vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUva29taS93d3cvdnVlLW1hZ2ljLXpvb20vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qcydcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCksIGNzc0luamVjdGVkQnlKc1BsdWdpbigpLCBkdHMoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvbWFpbi50cycpLFxuICAgICAgbmFtZTogJ1Z1ZU1hZ2ljWm9vbScsXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB2dWUtbWFnaWMtem9vbS4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxlQUFlLFdBQVc7QUFFNVMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLDJCQUEyQjtBQUNsQyxPQUFPLFNBQVM7QUFOaEIsSUFBTSxtQ0FBbUM7QUFBeUgsSUFBTSwyQ0FBMkM7QUFRbk4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFBQSxFQUMvQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ3ZDLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVSxDQUFDLFdBQVcsa0JBQWtCO0FBQUEsSUFDMUM7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQTtBQUFBO0FBQUEsUUFHTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
