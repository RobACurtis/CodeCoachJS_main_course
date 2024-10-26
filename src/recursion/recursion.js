/* 
    While you can certainly solve the tests by using an iterative solution
    please work towards the recursive solution ;) 
*/

/**
 * Return a flattened array
 *
 * @param {array} arr [1, [2, [3, [4, 5]]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const flattenArray = (arr, result = []) => {
	if (arr.length === 0) return result;

	if (Array.isArray(arr[0])) {
		flattenArray(arr[0], result); // Recursively flatten the first element if it's an array
	} else {
		result.push(arr[0]); // Otherwise, append the element to result
	}

	return flattenArray(arr.slice(1), result); // Process the rest of the array
};


// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // --> [1,2,3,4,5]

/**
 * Return a boolean based on whether a key is available in an object
 *
 * @param {object} obj
 * @param {string} key
 * @returns {boolean}
 */

const fileExplorer = (obj, key) => {
	for (const k in obj) {
		if (k === key) return obj[k];
		if (typeof obj[k] === 'object') {
			const result = fileExplorer(obj[k], key);
			if (result !== false) return result;
		}
	}
	return false;
};

/**
 * Returns an array of arrays with all possible permutations
 *
 * @param {array} nums ex: [1,2,3]
 * @returns {array} ex: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 */
const permutate = (nums = []) => {
	if (nums.length === 0) return [[]];
	if (nums.length === 1) return [nums];

	const result = [];

	for (let i = 0; i < nums.length; i++) {
		// Take one element out
		const currentNum = nums[i];
		// Get the remaining elements
		const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
		// Generate all permutations for the remaining elements
		const remainingPermutations = permutate(remainingNums);

		// Add the current number to each of the remaining permutations
		for (const perm of remainingPermutations) {
			result.push([currentNum, ...perm]);
		}
	}

	return result;
};

const subsets = (nums = []) => {
    const result = [[]];

    nums.forEach(num => {
        result.forEach(subset => {
            result.push([...subset, num]);
        });
    });

    return result;
};


module.exports = {
	flattenArray,
	fileExplorer,
	permutate,
	subsets,
};
