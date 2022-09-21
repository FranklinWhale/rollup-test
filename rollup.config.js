import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";

export default defineConfig([
	{
		input: "src/index.ts",
		output: {
			file: "dist/index-ts.js",
			format: "es",
			generatedCode: "es2015"
		},
		treeshake: "smallest",
		plugins: [
			typescript(),
			nodeResolve({ browser: true }),
			commonjs(),
			json()
		]
	},
	{
		input: "src/index.ts",
		output: {
			file: "dist/index-js.js",
			format: "es",
			generatedCode: "es2015"
		},
		treeshake: "smallest",
		plugins: [
			nodeResolve({ browser: true }),
			commonjs(),
			json()
		]
	}
]);