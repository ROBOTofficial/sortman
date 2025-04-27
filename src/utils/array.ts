export const dedepulication = <T>(arr: T[]): T[] => Array.from(new Set(arr));

export const inversion = <T>(arr: T[]): T[] => {
	const result: T[] = [];
	for (const element of arr) {
		result.unshift(element);
	}
	return result;
};

export const sortCheck = (arr: number[], desc?: boolean): boolean => {
	if (!arr.length) return true;
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		const next = arr[i + 1];
		if (num && next) {
			if (desc) {
				if (!(num >= next)) {
					break;
				}
			} else if (!(num <= next)) {
				break;
			}
		} else {
			return true;
		}
	}
	return false;
};
