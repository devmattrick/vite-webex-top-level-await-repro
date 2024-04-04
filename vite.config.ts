import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

export default defineConfig({
  plugins: [
    webExtension({
      additionalInputs: ["src/content_module.ts"],
      manifest: generateManifest,
      watchFilePaths: ["package.json", "manifest.json"],
      scriptViteConfig: {
        build: {
          // Top level await is only available in ESNext
          target: "ESNext"
        }
      }
    }),
  ],
});
