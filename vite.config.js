import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 8001, // Set your port
  },
  preview: {
    port: 8001, // Ensure preview also runs on the correct port
    allowedHosts: ["simple3dwebsite.umairshah.dev"],
  },
});
