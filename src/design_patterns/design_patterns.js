/**
 * @class PubSub
 * @description A simple pub/sub class
 * @example const pubsub = new PubSub();
 */
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(callback => callback(data));
    }
  }
}

/**
 * @class Singleton
 * @description A simple singleton class
 * @example const singleton = new Singleton();
 */
class Singleton {
  constructor() {
    if (Singleton.instance) {
      throw new Error("Cannot create another instance");
    }
    Singleton.instance = this;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

module.exports = {
  Singleton,
  PubSub,
};
