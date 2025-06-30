import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["src/index.ts"],
		dts: true,
		format: ["esm", "cjs"],
		tsconfig: "tsconfig.json",
		clean: true,
		outDir: "dist"
	},
	{
		entry: ["src/index.ts"],
		dts: true,
		format: ["esm", "cjs"],
		tsconfig: "tsconfig.json",
		minify: "terser",
		clean: true,
		outDir: "dist/tiny"
	}
]);
