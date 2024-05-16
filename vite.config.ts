import { crx, defineManifest } from "@crxjs/vite-plugin"
import { defineConfig } from "vite"

const manifest = defineManifest({
    manifest_version: 3,
    description: "",
    name: "Browser in the mirror",
    version: "1.0.0",
    permissions: ["activeTab", "scripting"],
    action: {
        default_title: "Browser in the mirror",
    },
    background: {
        service_worker: "src/background.ts",
    },
})

export default defineConfig({
    plugins: [crx({ manifest })],
})
