function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BST.prototype.insert = function (value) {
    if (value < this.value) {
        // Insert into the left subtree
        if (this.left === null) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
    } else {
        // Insert into the right subtree
        if (this.right === null) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
}

BST.prototype.search = function (value) {
    if (this.value === value) {
        return true;
    }
    
    if (value < this.value) {
        return this.left ? this.left.search(value) : false;
    }
    
    if (value > this.value) {
        return this.right ? this.right.search(value) : false;
    }
};



BST.prototype.inorder = function (vals = []) {
    if (this.left) {
        this.left.inorder(vals);
    }
    
    vals.push(this.value);

    if (this.right) {
        this.right.inorder(vals);
    }
    
    return vals;
};


BST.prototype.postorder = function (vals = []) {
    if (this.right) {
        this.right.postorder(vals);
    }
    
    vals.push(this.value);
    if (this.left) {
        this.left.postorder(vals);
    }

    return vals;
};


BST.prototype.bfs = function () {
    let result = [];
    let queue = [];

    queue.push(this);

    while (queue.length > 0) {
        let currentNode = queue.shift();

        result.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return result;
};


module.exports = BST;
