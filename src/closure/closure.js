/*
    Write a function that returns a function that can only be called once
    e.g. const myFunc = once(() => {console.log('yo')})
    myFunc() -> 'yo'
    myFunc() -> undefined
    myFunc() -> undefined
*/

const once = (fn) => {
let called = false
let result;
return function greetOnce(...args) {
    if (!called){
      result = fn(...args);
      called = true
      return result;
  } else {
    return undefined
  }
}
};

/*
    Write a function that returns a function that takes an initial number
    Subsequent calls will add that number to the new number
    e.g. const add2 = addFactory(2)

    add2(4) -> 6
    add2(7) -> 9
    add2(3) -> 5
*/

const addFactory = (initialNum) => {
  return function (num) {
    return initialNum + num;
  }

};

/*
    Our person has some sensitive information exposed below
    make `accountBalance` and `bankInfo` private by leveraging closure scope
    for example:
    personWithPrivateProperties().bankInfo.sensitiveId => undefined
    personWithPrivateProperties().accountBalance => undefined
*/

const personWithPrivateProperties = () => {
  let bankInfo = {
    name: "Chase Bank",
    sensitiveId: "CB456"
  };
  let accountBalance = -5;
  return {
    age: 10,
    job: "Pizza Driver",
    updateBank: (obj) => {
      for (const key in obj) {
        personWithPrivateProperties.key = obj[key]
      }
    },
    getBankInfo: () => {
      return bankInfo.name
    },
    getAccountBalance: () => {
      return accountBalance
    },
    updateAccountBalance: (newBalance) => {
      accountBalance += newBalance
    },
  };
};

module.exports = {
  once,
  addFactory,
  personWithPrivateProperties,
};
