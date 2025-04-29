import { describe, expect, test } from "@jest/globals";
import { ignoreSorts, numArrData, objectArrData, sorts } from "./utils";
import { sortCheck } from "../src/utils/array";

function evalTest(originalData: number[], sortedData: number[], desc?: boolean): boolean {
	const isSameArr = (() => {
		const cache = new Map<number, number>();

		for (const element of originalData) {
			const cachedData = cache.get(element);
			if (cachedData) {
				cache.set(element, cachedData + 1);
			} else {
				cache.set(element, 1);
			}
		}

		for (const [num, count] of cache.entries()) {
			if (count !== sortedData.filter((value) => value === num).length) {
				return false;
			}
		}

		return true;
	})() satisfies boolean;
	return sortCheck(sortedData, desc) && originalData.length === sortedData.length && isSameArr;
}

for (const { name, algorithm, options } of sorts) {
	if (!ignoreSorts.includes(name)) {
		describe(name, () => {
			describe("Normal test", () => {
				test("Number array", () => {
					const result = algorithm.sort(numArrData);
					expect(evalTest(numArrData, result)).toBe(true);
				});
				test("Number array with options", () => {
					const result = algorithm.sort(numArrData, {
						func: (e) => e
					});
					expect(evalTest(numArrData, result)).toBe(true);
				});
				test("Object array", () => {
					const result = algorithm.sort(objectArrData, {
						func: (e) => e.num
					});
					expect(
						evalTest(
							objectArrData.map(({ num }) => num),
							result.map(({ num }) => num)
						)
					).toBe(true);
				});
			});
			describe("Option test", () => {
				test("Desc", () => {
					const result = algorithm.sort(numArrData, {
						desc: true
					});
					expect(evalTest(numArrData, result, true)).toBe(true);
				});
			});
			if (options && options.describe) {
				options.describe();
			}
		});
	}
}
