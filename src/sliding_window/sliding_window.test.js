const { getMaxSumOfElementsInSubArray } = require("./sliding_window");

describe("Sliding Window", () => {
  it("should return the max sum of a subarray of size k", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const k = 3;

    expect(getMaxSumOfElementsInSubArray(arr, k)).toBe(27);
  });

  it("should return the max sum of a subarray of size k", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const k = 4;

    expect(getMaxSumOfElementsInSubArray(arr, k)).toBe(34);
  });
});
