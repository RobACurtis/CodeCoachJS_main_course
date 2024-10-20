const { Trie } = require("./trie");

describe("Trie", () => {
  it("should insert a word", () => {
    const trie = new Trie();
    trie.insert("apple");

    expect(trie.search("apple")).toBe(true);
  });

  it("should return true if the word is in the trie", () => {
    const trie = new Trie();
    trie.insert("apple");

    expect(trie.search("apple")).toBe(true);
  });

  it("should return false if the word is not in the trie", () => {
    const trie = new Trie();
    trie.insert("apple");

    expect(trie.search("app")).toBe(false);
  });

  it("should return true if there is any word in the trie that starts with the given prefix", () => {
    const trie = new Trie();
    trie.insert("apple");

    expect(trie.startsWith("app")).toBe(true);
  });
});
