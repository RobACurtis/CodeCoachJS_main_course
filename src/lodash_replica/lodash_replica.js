/**
 * Returns a flattened array
 *
 * @param {array} arr a nested OR not nested array ex: [1, [2,3], [4, [5]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const myFlatMap = (nestedArr) => {
const flat = [];
  const handleFlat = (array) => {
    let counter = 0
    while (counter < array.length) {
      const val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flat.push(val)
      }
      counter++;
    }
  }
  handleFlat(nestedArr);
  return flat;
};

/**
 * Returns an array combining the initial array with the other values
 *
 * @param {array} arr an array
 * @param {array} values destructured series of arrays ex: [1], [2], [3]
 * @returns {array} ex: [1,2,3]
 */
function myConcat(...arrays) {
  const result = [];

  for (let array of arrays) {
    for (let item of array) {
      result.push(item);
    }
  }

  return result;
}


/**
 * Returns an array with all rejected items removed
 *
 * @param {array} arr an array
 * @param {any} itemToReject value which should be removed from arr
 * @returns {array}
 */
const myReject = (arr, itemToReject) => {
  const result = [];

  for (let item of arr) {
    if (item !== itemToReject) {
      result.push(item);
    }
  }

  return result;
};

module.exports = {
    myFlatMap,
    myConcat,
    myReject,
};
