const BST = require('./bst.js');

const mytree = new BST(15);
mytree.insert(25);
mytree.insert(10);
mytree.insert(7);
mytree.insert(22);
mytree.insert(17);
mytree.insert(13);
mytree.insert(5);
mytree.insert(9);
mytree.insert(27);

describe('search', () => {
    it('returns a boolean depending whether a value is present in the tree', () => {
        expect(mytree.search(25)).toBe(true);
        expect(mytree.search(100)).toBe(false);
    });
});

describe('inorder', () => {
    it('returns an array of tree values in order', () => {
        expect(mytree.inorder()).toEqual([5, 7, 9, 10, 13, 15, 17, 22, 25, 27]);
    });
});

describe('postorder', () => {
    it('returns an array of tree values in reverse order', () => {
        expect(mytree.postorder()).toEqual([
            27, 25, 22, 17, 15, 13, 10, 9, 7, 5,
        ]);
    });
});
