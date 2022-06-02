/*                               15
                               /    \
                              3      36
                            /  \    /  \
                           2   12  28  39
*/ // This is the Tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }
    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    insert(value) {
        this.count++;
        let newNode = new Node(value);
        const searchTree = (node) => {
            // If the value < node.value, go left
            if (value < node.value) {
                // if no left child, append new node
                if (!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }// if left child, look left again

            } else if (value > node.value) { // If value > node.value go right
                // If no right child, append new node
                if (!node.right) {
                    node.right = newNode;
                } else { // if right child, Look right again
                    searchTree(node.right);
                }
            }
        }

        searchTree(this.root);
    }
    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    min() {
        let currentNode = this.root;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }
    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    max() {
        let currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }
    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    contains(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;
    }
    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    // Depth first search - branch by branch
    // In order
    // left, root, right
    // 2, 3, 12, 15, 36, 39

    dfsInOrder() {
        let result = [];

        const traverse = (node) => {
            // If left child exists, go left again
            if (node.left) traverse(node.left)
            // capture root node value
            result.push(node.value)
            if(node.right) traverse(node.right)
        }

        traverse(this.root);

        return result;
    }
    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    // pre-order
    // root, left, right
    // 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() {
        let result = []

        const traverse = node => {
            // capture root node value
            result.push(node.value)
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return result
    }
    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    // post-order
    // left, right, root
    // 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() {
        let result = []

        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
            // capture root node value
            result.push(node.value)
        }

        traverse(this.root)

        return result
    }

    /*                               15
                                   /    \
                                  3      36
                                /  \    /  \
                               2   12  28  39
    */ // This is the Tree
    // breadth first search - level by level

    // use a queue!
    // 15, 3, 36, 2, 12, 28, 39
    bfs() {
        let result = []
        let queue = []

        queue.push(this.root)

        while(queue.length) {
            let currentNode = queue.shift()

            result.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return result
    }
}
/*                               15
                               /    \
                              3      36
                            /  \    /  \
                           2   12  28  39
*/ // This is the Tree
const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

bst.size()

bst.min()
bst.max()

bst.contains(2)
bst.contains(9)

// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
bst.dfsInOrder()

// pre-order: 15, 3, 2, 12, 36, 28, 39
bst.dfsPreOrder()

// post-order: 2, 12, 3, 28, 39, 36, 15
bst.dfsPostOrder()
