/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+.tsx?$": [
			"ts-jest",
			{
				tsconfig: "jest.tsconfig.json"
			}
		]
	},
	moduleFileExtensions: ["ts", "js"]
};
