/**
 * getMaximumSumSubarray - Returns the maximum sum subarray of a given array
 * @param {array} arr ex: [1,2,3,4,5,6,7,8,9,10]
 * @param {number} k
 * @returns {number} the max sum of k consecutive numbers in the array
 */
const getMaxSumOfElementsInSubArray = (arr, k) => {
  if (arr.length < k) return null; // if k is greater than the array length, return null

  let maxSum = 0;

  // Calculate the sum of the first 'k' elements
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  // Slide the window through the array
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i]; // slide the window forward by subtracting the first element and adding the next one
    maxSum = Math.max(maxSum, currentSum); // update maxSum if currentSum is greater
  }

  return maxSum;
};

module.exports = {
  getMaxSumOfElementsInSubArray,
};
