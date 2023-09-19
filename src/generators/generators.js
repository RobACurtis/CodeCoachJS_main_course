/**
 * Return an iterator counting down from the initial number
 *
 * @param {number} initial initial num to start loop
 * @returns {iterator} ex: {value: 1, done: false}
 */
function* forLoopGenerator(initial) {
    let i = initial;
    while(i) {
        yield i;
        i--;
    }
}

/**
 * Return an iterator generating a unique id
 *
 * @returns {iterator} ex: {value: 1231234, done: false}
 */
function* generateRandomId() {
    // your code here
    while (true) {
        yield Math.floor(Math.random() * 1000000);
    }
}

module.exports = {
    forLoopGenerator,
    generateRandomId,
};
