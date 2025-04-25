import { defineConfig } from "tsup";
import path from "node:path";

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	format: ["esm", "cjs"],
	tsconfig: path.join(import.meta.dirname, "tsconfig.json"),
	sourcemap: true,
	minify: true
});
