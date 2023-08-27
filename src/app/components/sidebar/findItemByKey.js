const findItemByKey = (arr, key, value) => {
	for (let i = 0; i < arr?.length; i += 1) {
		if (arr[i][key] === value) {
			return arr[i];
		}
		if (arr[i]?.children?.length > 0) {
			const foundItem = findItemByKey(arr[i]?.children, key, value);
			if (foundItem) {
				return foundItem;
			}
		}
	}
	return null;
};

export default findItemByKey;
