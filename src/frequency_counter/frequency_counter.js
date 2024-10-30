/**
 * countFrequency - counts the frequency of each value in an array
 * @param {array} arr [1, 1, 2, 3]
 * @returns {object} an object with the key being the value and the value being the frequency {1: 2, 2: 1, 3: 1}
 */
const countFrequency = (arr) => {
  const frequencyCounter = {};

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  return frequencyCounter;
};

/**
 * getDuplicates returns all the duplicate values in an array
 * @param {array} arr [1,2,1,2,3,4,5,6,7,8,9,9]
 * @returns {array} an array of all the duplicate values in the array [1,2,9]
 */

const getDuplicates = (arr) => {
  const frequencyCounter = {};
  const duplicates = [];

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
};

module.exports = {
  countFrequency,
  getDuplicates,
};
