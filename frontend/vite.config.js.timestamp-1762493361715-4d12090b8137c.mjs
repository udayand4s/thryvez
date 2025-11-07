// vite.config.js
import { defineConfig } from "file:///F:/spotifyStats%20all%20proj/frappe/lms/frontend/node_modules/.pnpm/vite@5.4.21_terser@5.44.1/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/spotifyStats%20all%20proj/frappe/lms/frontend/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_b04ecae20b568b24d0c714262de0067d/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import frappeui from "file:///F:/spotifyStats%20all%20proj/frappe/lms/frontend/node_modules/.pnpm/frappe-ui@0.1.213_@babel+pa_659f14861e3b44b70329ab09534a595f/node_modules/frappe-ui/vite/index.js";
import { VitePWA } from "file:///F:/spotifyStats%20all%20proj/frappe/lms/frontend/node_modules/.pnpm/vite-plugin-pwa@1.1.0_vite@_c930060d8be0797ec630162121df85f2/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "F:\\spotifyStats all proj\\frappe\\lms\\frontend";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxzcG90aWZ5U3RhdHMgYWxsIHByb2pcXFxcZnJhcHBlXFxcXGxtc1xcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcc3BvdGlmeVN0YXRzIGFsbCBwcm9qXFxcXGZyYXBwZVxcXFxsbXNcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3Nwb3RpZnlTdGF0cyUyMGFsbCUyMHByb2ovZnJhcHBlL2xtcy9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgZnJhcHBldWkgZnJvbSAnZnJhcHBlLXVpL3ZpdGUnXHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdHBsdWdpbnM6IFtcclxuXHRcdGZyYXBwZXVpKHtcclxuXHRcdFx0ZnJhcHBlUHJveHk6IHRydWUsXHJcblx0XHRcdGx1Y2lkZUljb25zOiB0cnVlLFxyXG5cdFx0XHRqaW5qYUJvb3REYXRhOiB0cnVlLFxyXG5cdFx0XHRmcmFwcGVUeXBlczoge1xyXG5cdFx0XHRcdGlucHV0OiB7fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0YnVpbGRDb25maWc6IHtcclxuXHRcdFx0XHRpbmRleEh0bWxQYXRoOiAnLi4vbG1zL3d3dy9sbXMuaHRtbCcsXHJcblx0XHRcdH0sXHJcblx0XHR9KSxcclxuXHRcdHZ1ZSh7XHJcblx0XHRcdHNjcmlwdDoge1xyXG5cdFx0XHRcdGRlZmluZU1vZGVsOiB0cnVlLFxyXG5cdFx0XHRcdHByb3BzRGVzdHJ1Y3R1cmU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9KSxcclxuXHRcdFZpdGVQV0Eoe1xyXG5cdFx0XHRyZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuXHRcdFx0ZGV2T3B0aW9uczoge1xyXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdHdvcmtib3g6IHtcclxuXHRcdFx0XHRjbGVhbnVwT3V0ZGF0ZWRDYWNoZXM6IHRydWUsXHJcblx0XHRcdFx0bWF4aW11bUZpbGVTaXplVG9DYWNoZUluQnl0ZXM6IDUgKiAxMDI0ICogMTAyNCxcclxuXHRcdFx0fSxcclxuXHRcdFx0bWFuaWZlc3Q6IGZhbHNlLFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdGhvc3Q6ICcwLjAuMC4wJywgLy8gQWNjZXB0IGNvbm5lY3Rpb25zIGZyb20gYW55IG5ldHdvcmsgaW50ZXJmYWNlXHJcblx0XHRhbGxvd2VkSG9zdHM6IFsncHMnLCAnZnMnLCAnaG9tZSddLCAvLyBFeHBsaWNpdGx5IGFsbG93IHRoaXMgaG9zdFxyXG5cdH0sXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0YWxpYXM6IHtcclxuXHRcdFx0J0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcblx0XHRcdCd0YWlsd2luZC5jb25maWcuanMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndGFpbHdpbmQuY29uZmlnLmpzJyksXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0b3B0aW1pemVEZXBzOiB7XHJcblx0XHRpbmNsdWRlOiBbXHJcblx0XHRcdCdmZWF0aGVyLWljb25zJyxcclxuXHRcdFx0J3Nob3dkb3duJyxcclxuXHRcdFx0J2VuZ2luZS5pby1jbGllbnQnLFxyXG5cdFx0XHQndGFpbHdpbmQuY29uZmlnLmpzJyxcclxuXHRcdFx0J2ludGVyYWN0anMnLFxyXG5cdFx0XHQnaGlnaGxpZ2h0LmpzJyxcclxuXHRcdFx0J3BseXInLFxyXG5cdFx0XSxcclxuXHR9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9VLFNBQVMsb0JBQW9CO0FBQ2pXLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxjQUFjO0FBQ3JCLFNBQVMsZUFBZTtBQUp4QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixTQUFTO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsTUFDZixhQUFhO0FBQUEsUUFDWixPQUFPLENBQUM7QUFBQSxNQUNUO0FBQUEsTUFDQSxhQUFhO0FBQUEsUUFDWixlQUFlO0FBQUEsTUFDaEI7QUFBQSxJQUNELENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNILFFBQVE7QUFBQSxRQUNQLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLE1BQ25CO0FBQUEsSUFDRCxDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsUUFDWCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1IsdUJBQXVCO0FBQUEsUUFDdkIsK0JBQStCLElBQUksT0FBTztBQUFBLE1BQzNDO0FBQUEsTUFDQSxVQUFVO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFDTixjQUFjLENBQUMsTUFBTSxNQUFNLE1BQU07QUFBQTtBQUFBLEVBQ2xDO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbEMsc0JBQXNCLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxJQUNuRTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNiLFNBQVM7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
