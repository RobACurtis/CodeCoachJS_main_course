/**
 * Initialize your data structure here.
 */
const TrieNode = function () {
  this.children = {}; // Children will be a map of characters to TrieNodes
  this.isEndOfWord = false; // Marks if this node represents the end of a word
};

// Define the Trie structure
const Trie = function () {
  this.root = new TrieNode(); // The root node is an empty node
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentNode = this.root;

  for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // If the character does not exist in the current node's children, create it
      if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
      }

      // Move to the next node in the Trie
      currentNode = currentNode.children[char];
  }

  // Mark the end of the word
  currentNode.isEndOfWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */

Trie.prototype.search = function (word) {
  let currentNode = this.root;

  for (let i = 0; i < word.length; i++) {
      const char = word[i];

      // If the character does not exist in the current node's children, return false
      if (!currentNode.children[char]) {
          return false;
      }

      // Move to the next node
      currentNode = currentNode.children[char];
  }

  // Check if the current node marks the end of a valid word
  return currentNode.isEndOfWord;
};


/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentNode = this.root;

  for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      // If the character does not exist in the current node's children, return false
      if (!currentNode.children[char]) {
          return false;
      }

      // Move to the next node
      currentNode = currentNode.children[char];
  }

  // If we traverse the entire prefix, return true
  return true;
};


module.exports = {
  Trie,
};
