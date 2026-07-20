import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
test("页面为 Vue 且不依赖私有在线服务", async () => { const source=await readFile(new URL("../src/App.vue",import.meta.url),"utf8"); assert.match(source,/<script setup lang="ts">/); assert.match(source,/山下饭堂/); assert.match(source,/submitReservation/); assert.doesNotMatch(source,/ChatGPT|Cloudflare|vinext|wrangler/i); });
test("使用 Vue 3 和 Vite", async () => { const pkg=JSON.parse(await readFile(new URL("../package.json",import.meta.url),"utf8")); assert.match(pkg.dependencies.vue,/^3\./); assert.ok(pkg.devDependencies["@vitejs/plugin-vue"]); assert.equal(pkg.scripts.dev,"vite"); });
