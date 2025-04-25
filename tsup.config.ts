import { defineConfig } from "tsup";
import { join } from "path";

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	format: ["esm", "cjs"],
	tsconfig: join(import.meta.dirname, "tsconfig.json"),
	sourcemap: true,
	minify: true
});
