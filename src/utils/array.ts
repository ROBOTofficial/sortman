export const dedepulication = <T>(arr: T[]): T[] => Array.from(new Set(arr));

export const sortCheck = (arr: number[]): boolean => {
	if (!arr.length) return true;
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		const next = arr[i + 1];
		if (num && next) {
			if (!(num <= next)) {
				break;
			}
		} else {
			return true;
		}
	}
	return false;
};
