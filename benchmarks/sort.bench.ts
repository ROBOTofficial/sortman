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

compact(() => {
	group(".sort", () => {
		bench("Number array", () => {
			numArrData.sort((a, b) => a - b);
		});
		bench("Number array in option", () => {
			objectArrData.sort((a, b) => a.num - b.num);
		});
		bench("Object array", () => {
			objectArrData.sort((a, b) => a.num - b.num);
		});
	});
});

await run();
