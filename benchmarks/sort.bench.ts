import { bench, compact, group, run } from "mitata";
import { generateNumArrData, generateObjectArrData, sorts } from "../tests/utils";

const numArrData = generateNumArrData();

const objectArrData = generateObjectArrData();

for (const { name, algorithm } of sorts) {
	if (name !== "Random sort") {
		compact(() => {
			group(name, () => {
				bench("Number array", () => {
					algorithm.sort(numArrData);
				});
				bench("Number array in option", () => {
					algorithm.sort({ arr: numArrData });
				});
				bench("Object array", () => {
					algorithm.sort({
						arr: objectArrData,
						func: (e) => e.num
					});
				});
			});
		});
	}
}

await run();
