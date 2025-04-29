import { bench, compact, group, run } from "mitata";
import { generateNumArrData, generateObjectArrData, ignoreSorts, sorts } from "../tests/utils";

const numArrData = generateNumArrData();

const objectArrData = generateObjectArrData();

for (const { name, algorithm } of sorts) {
	if (!ignoreSorts.includes(name)) {
		compact(() => {
			group(name, () => {
				bench("Number array", () => {
					algorithm.sort(numArrData);
				});
				bench("Number array in option", () => {
					algorithm.sort(objectArrData, {
						func: (e) => e.num
					});
				});
				bench("Object array", () => {
					algorithm.sort(objectArrData, {
						func: (e) => e.num
					});
				});
			});
		});
	}
}

await run();
