// vite.config.js
import { defineConfig } from "file:///F:/spotifyStats(all%20projects)/frappe/lms/frontend/node_modules/.pnpm/vite@5.4.21_terser@5.44.1/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/spotifyStats(all%20projects)/frappe/lms/frontend/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_b04ecae20b568b24d0c714262de0067d/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import frappeui from "file:///F:/spotifyStats(all%20projects)/frappe/lms/frontend/node_modules/.pnpm/frappe-ui@0.1.213_@babel+pa_659f14861e3b44b70329ab09534a595f/node_modules/frappe-ui/vite/index.js";
import { VitePWA } from "file:///F:/spotifyStats(all%20projects)/frappe/lms/frontend/node_modules/.pnpm/vite-plugin-pwa@1.1.0_vite@_c930060d8be0797ec630162121df85f2/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "F:\\spotifyStats(all projects)\\frappe\\lms\\frontend";
var vite_config_default = defineConfig({
  plugins: [
    frappeui({
      frappeProxy: true,
      lucideIcons: true,
      jinjaBootData: true,
      frappeTypes: {
        input: {}
      },
      buildConfig: {
        indexHtmlPath: "../lms/www/lms.html"
      }
    }),
    vue({
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      },
      manifest: false
    })
  ],
  server: {
    host: "0.0.0.0",
    // Accept connections from any network interface
    allowedHosts: ["ps", "fs", "home"]
    // Explicitly allow this host
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "tailwind.config.js": path.resolve(__vite_injected_original_dirname, "tailwind.config.js")
    }
  },
  optimizeDeps: {
    include: [
      "feather-icons",
      "showdown",
      "engine.io-client",
      "tailwind.config.js",
      "interactjs",
      "highlight.js",
      "plyr"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxzcG90aWZ5U3RhdHMoYWxsIHByb2plY3RzKVxcXFxmcmFwcGVcXFxcbG1zXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxzcG90aWZ5U3RhdHMoYWxsIHByb2plY3RzKVxcXFxmcmFwcGVcXFxcbG1zXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9zcG90aWZ5U3RhdHMoYWxsJTIwcHJvamVjdHMpL2ZyYXBwZS9sbXMvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IGZyYXBwZXVpIGZyb20gJ2ZyYXBwZS11aS92aXRlJ1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRmcmFwcGV1aSh7XHJcblx0XHRcdGZyYXBwZVByb3h5OiB0cnVlLFxyXG5cdFx0XHRsdWNpZGVJY29uczogdHJ1ZSxcclxuXHRcdFx0amluamFCb290RGF0YTogdHJ1ZSxcclxuXHRcdFx0ZnJhcHBlVHlwZXM6IHtcclxuXHRcdFx0XHRpbnB1dDoge30sXHJcblx0XHRcdH0sXHJcblx0XHRcdGJ1aWxkQ29uZmlnOiB7XHJcblx0XHRcdFx0aW5kZXhIdG1sUGF0aDogJy4uL2xtcy93d3cvbG1zLmh0bWwnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XHR2dWUoe1xyXG5cdFx0XHRzY3JpcHQ6IHtcclxuXHRcdFx0XHRkZWZpbmVNb2RlbDogdHJ1ZSxcclxuXHRcdFx0XHRwcm9wc0Rlc3RydWN0dXJlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XHRWaXRlUFdBKHtcclxuXHRcdFx0cmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcblx0XHRcdGRldk9wdGlvbnM6IHtcclxuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3b3JrYm94OiB7XHJcblx0XHRcdFx0Y2xlYW51cE91dGRhdGVkQ2FjaGVzOiB0cnVlLFxyXG5cdFx0XHRcdG1heGltdW1GaWxlU2l6ZVRvQ2FjaGVJbkJ5dGVzOiA1ICogMTAyNCAqIDEwMjQsXHJcblx0XHRcdH0sXHJcblx0XHRcdG1hbmlmZXN0OiBmYWxzZSxcclxuXHRcdH0pLFxyXG5cdF0sXHJcblx0c2VydmVyOiB7XHJcblx0XHRob3N0OiAnMC4wLjAuMCcsIC8vIEFjY2VwdCBjb25uZWN0aW9ucyBmcm9tIGFueSBuZXR3b3JrIGludGVyZmFjZVxyXG5cdFx0YWxsb3dlZEhvc3RzOiBbJ3BzJywgJ2ZzJywgJ2hvbWUnXSwgLy8gRXhwbGljaXRseSBhbGxvdyB0aGlzIGhvc3RcclxuXHR9LFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdGFsaWFzOiB7XHJcblx0XHRcdCdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG5cdFx0XHQndGFpbHdpbmQuY29uZmlnLmpzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3RhaWx3aW5kLmNvbmZpZy5qcycpLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG9wdGltaXplRGVwczoge1xyXG5cdFx0aW5jbHVkZTogW1xyXG5cdFx0XHQnZmVhdGhlci1pY29ucycsXHJcblx0XHRcdCdzaG93ZG93bicsXHJcblx0XHRcdCdlbmdpbmUuaW8tY2xpZW50JyxcclxuXHRcdFx0J3RhaWx3aW5kLmNvbmZpZy5qcycsXHJcblx0XHRcdCdpbnRlcmFjdGpzJyxcclxuXHRcdFx0J2hpZ2hsaWdodC5qcycsXHJcblx0XHRcdCdwbHlyJyxcclxuXHRcdF0sXHJcblx0fSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sY0FBYztBQUNyQixTQUFTLGVBQWU7QUFKeEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZUFBZTtBQUFBLE1BQ2YsYUFBYTtBQUFBLFFBQ1osT0FBTyxDQUFDO0FBQUEsTUFDVDtBQUFBLE1BQ0EsYUFBYTtBQUFBLFFBQ1osZUFBZTtBQUFBLE1BQ2hCO0FBQUEsSUFDRCxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDSCxRQUFRO0FBQUEsUUFDUCxhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxNQUNuQjtBQUFBLElBQ0QsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLFFBQ1gsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNSLHVCQUF1QjtBQUFBLFFBQ3ZCLCtCQUErQixJQUFJLE9BQU87QUFBQSxNQUMzQztBQUFBLE1BQ0EsVUFBVTtBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQTtBQUFBLElBQ04sY0FBYyxDQUFDLE1BQU0sTUFBTSxNQUFNO0FBQUE7QUFBQSxFQUNsQztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ2xDLHNCQUFzQixLQUFLLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsSUFDbkU7QUFBQSxFQUNEO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDYixTQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
