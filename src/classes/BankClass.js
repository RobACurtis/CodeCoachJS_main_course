var shajs = require('sha.js')
class Bank {
    /**
     * @returns {string} a unique string of any length
     */
    static createRoutingNumber() {
        return shajs('sha256').update(Math.random(30)).digest('hex')
    }

    constructor(initialAmt = 0) {
        this.account = initialAmt;
    }

    /**
     *
     * @param {number} amt
     * @returns {promise} updates the account with the new amount and resolves with the new account amount
     */
    deposit = (amt) => {
        return new Promise((resolve) => {
            this.account += amt;
            resolve(this.account);
        });
    };

    /**
     *
     * @param {number} amt
     * @returns {promise} rejects if the amount requested is more than what's available and resolves with the new account amount
     */
    withdraw = (amt) => {
        return new Promise((resolve, reject) => {
            if (this.account >= amt){
                this.account -= amt;
                resolve(this.account);
            } else {
                reject(new Error("Insufficient Funds"));
            }
        });
    };

    /**
     *
     * @returns account property
     */
    getBalance = () => {
        return this.account;
    };
}

module.exports = {
    Bank,
};
