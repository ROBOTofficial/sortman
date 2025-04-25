import { join } from "path";

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+.tsx?$": [
			"ts-jest",
			{
				tsconfig: join(import.meta.dirname, "jest.tsconfig.json")
			}
		]
	},
	moduleFileExtensions: ["ts", "js"]
};
