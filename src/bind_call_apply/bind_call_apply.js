/**
 * Return a greeting
 *
 * @returns {string} `Hey my name is <person name>
 */
function personGreeting() {
  // your code here
  return `Hey my name is ${this.name}`
}

/**
 * Returns a string
 *
 * @param {string} like1
 * @param {string} like2
 * @returns {string} My name is {name} I am a {job} like {like1} and {like2}
 */
function personSmallTalk(like1, like2) {
  // your code here
  return `My name is ${this.name} and I am a ${this.job} and like ${like1} and ${like2}`
}

/**
 * Returns a string
 *
 * @param {string[]} hobbies
 * @returns {string} Hey my name is {name} and I like {hobbies}
 */
function listHobbies(...hobbies) {
  // your code here
  let hobbiesString = '';
  for (let i = 0; i <= hobbies.length - 1; i++) {
    if (i == 0) {
      hobbiesString += hobbies[i]
    } else if (i === hobbies.length - 1 ) {
      hobbiesString += ` and ${hobbies[i]}`
    } else {
      hobbiesString += `, ${hobbies[i]}`
    }
  }
  return `Hey my name is ${this.name} and I like ${hobbiesString}`
}

// HINT: leverage the `call` method to make the following functions work as expected

Function.prototype.myBind = function (context, ...args) {
  // your code here
};

Function.prototype.myApply = function (context, args = []) {
  // your code here
};

module.exports = {
  personSmallTalk,
  listHobbies,
  personGreeting,
};
