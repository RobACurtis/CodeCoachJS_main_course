// functions have a prototype property and functions are objects
const Person = function () {};

// new instance of Person
const personA = new Person();

// TODO:
// create another instance of Person called personB
const personB = new Person();
// TODO:
// override the default name and job of personB
// personB name should be 'Randy' and their job should be 'Doughnut Maker'
personA.name = 'Joe';
personA.job = 'Pizza Guy';
personB.name = 'Randy';
personB.job = 'Doughnut Maker';
// TODO:
// attach a new method `greeting` to the Person prototype
// it should return a greeting that says `My name is <name> and my job is <job>`
Person.prototype.greeting = function (){
	return `My name is ${this.name} and my job is ${this.job}`
};

// TODO:
// add a new method to the Array prototype called `myCustomFind`
// this method should take in a single argument and return `true` if that argument is found in the array and `false` if not
// ex: [1,2,3].myCustomFind(3) = true
// [1,2,3].myCustomFind(10) = false

Array.prototype.myCustomFind = function (num) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === num) {
			return true;
		}
		return false;
	}
};

module.exports = {
	personB,
	personA,
	Person,
};
