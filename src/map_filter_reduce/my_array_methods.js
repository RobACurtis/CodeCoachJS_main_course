/**
 *
 * PLEASE DO NOT USE THE BUILT IN METHODS FOR THE FOLLOWING EXERCISES
 */
Array.prototype.myFilter = function (callBack) {
  //add your code here
  // loop through each item in array
  // callback === true? then add to new array
  // return new array
  let newArr =[]
  for (let i = 0; i < this.length; i++) {
    let result = callBack(this[i])
    if (result) {
      newArr.push(this[i])
    }
  }
  return newArr;
};

Array.prototype.myMap = function (callBack) {
  //add your code here
  let newArr = []
  for (let i = 0; i < this.length; i++) {
      newArr.push(callBack(this[i]))
  }
  return newArr;
};

Array.prototype.myEvery = function (callBack) {
  //add your code here
  for (let i = 0; i < this.length; i++) {
    let result = callBack(this[i])
    if (!result) {
      return false;
    }
    return true;
  }
};

Array.prototype.mySome = function (callBack) {
  //add your code here
  for (let i = 0; i < this.length; i++) {
    let result = callBack(this[i])
    if (result) {
      return true;
    }
  }
  return false;
};

const addAllNumbers = (arr) => {
  //add your code here using reduce
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

module.exports = {
  addAllNumbers,
};
