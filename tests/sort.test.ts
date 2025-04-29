import { describe, expect, test } from "@jest/globals";
import { ignoreSorts, numArrData, objectArrData, sorts } from "./utils";
import { sortCheck } from "../src/utils/array";

for (const { name, algorithm, options } of sorts) {
	if (!ignoreSorts.includes(name)) {
		describe(name, () => {
			describe("Normal test", () => {
				test("Number array", () => {
					const result = algorithm.sort(numArrData);
					expect(sortCheck(result)).toBe(true);
				});
				test("Number array with options", () => {
					const result = algorithm.sort(numArrData, {
						func: (e) => e
					});
					expect(sortCheck(result)).toBe(true);
				});
				test("Object array", () => {
					const result = algorithm.sort(objectArrData, {
						func: (e) => e.num
					});
					expect(sortCheck(result.map(({ num }) => num))).toBe(true);
				});
			});
			describe("Option test", () => {
				test("Desc", () => {
					const result = algorithm.sort(numArrData, {
						desc: true
					});
					expect(sortCheck(result, true)).toBe(true);
				});
			});
			if (options && options.describe) {
				options.describe();
			}
		});
	}
}
