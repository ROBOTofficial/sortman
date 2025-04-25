import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	format: ["esm", "cjs"],
	tsconfig: "tsconfig.json",
	minify: true,
	clean: true
});
