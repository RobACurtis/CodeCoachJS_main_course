const linearTime = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Constant time operation
  }
  return sum;
};

const squaredTime = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

const logarithmicTime = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1; // Narrow down to the right half
    } else {
      right = mid - 1; // Narrow down to the left half
    }
  }
};

const cubedTime = (arr) => {
  let n = arr.length;
  let triplets = [];

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          triplets.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return triplets;
};

const factorialTime = (arr) => {
  let result = [];

  function generatePermutations(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        generatePermutations(
          current.concat(remaining[i]),
          remaining.slice(0, i).concat(remaining.slice(i + 1))
        );
      }
    }
  }

  generatePermutations([], arr);
  return result;
};

const twoToPowerOfN = () => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
