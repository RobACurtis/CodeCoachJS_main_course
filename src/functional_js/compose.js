/**
 * Composes a list of functions into a single function
 * @param  {...any} fns javascript functions
 * @returns {function} a function that takes in an argument and passes it through all the functions
 */
const composeFunctions = (...fns) => (initialValue) => {
  let result = initialValue;
  // Iterate through functions from right to left
  for (let i = fns.length - 1; i >= 0; i--) {
    result = fns[i](result);
  }

  return result;
};

/**
 * Transforms an item using a list of functions
 * @param {*} fns an array of functions
 * @param {*} item an item to transform
 * @returns {*} the transformed item in its original shape
 */
const transforms = (item) => {
	// TODO: make these function pure (no side effects)
  const removeJob = (obj) => {
    const { job, ...rest } = obj;
    return { ...rest };
  };

  const addName = (obj) => {
    return { ...obj, name: obj.name.toLocaleUpperCase() };
  };

  const updateAge = (obj) => {
    return { ...obj, age: Number(obj.age) };
  };

	const fns = [removeJob, addName, updateAge];

	return fns.reduce((acc, fn) => {
		return fn(acc);
	}, item);
};

module.exports = {
	composeFunctions,
	transforms,
};
