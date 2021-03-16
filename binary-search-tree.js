function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    add(data) {
        const node = new Node(data)
        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(node)
        }
    }

    insertNode(node) {
        let current = this.root
        while (current) {
            if (node.data <= current.data) {
                if (!current.left) {
                    current.left = node
                    break
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = node
                    break
                }
                current = current.right
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, data) {
        if (!node) {
            return null
        }
        if (data === node.data) {
            if (!node.left && !node.right) {
                return null
            }
            if (!node.left) {
                return node.right
            }
            if (!node.right) {
                return node.left
            }

            const temp = this.getMin(node.right)
            node.data = temp

            node.right = this.removeNode(node.right, temp)
            return node
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else {
            node.right = this.removeNode(node.right, data)
            return node
        }
    }

    getMin(node) {
        if (!node) {
            node = this.root
        }
        while (node.left) {
            node = node.left
        }
        return node.data
    }

    getHeight(root = this.root) {
        // const arr = JSON.stringify(root).match(/\d+/g).map(Number)
        // let maxHeigth = 0
        // if ((!root.left && !root.right) || !root) return 0
        // for (let check of arr) {
        //     let node = new Node(check)
        //     let current = root
        //     let temp = 0
        //     while (current) {
        //         if (node.data < current.data) {
        //             if (!current.left) {
        //                 temp++
        //                 // current.left = node
        //                 break
        //             }
        //             temp++
        //             current = current.left
        //         } else if (node.data > current.data) {
        //             if (!current.right) {
        //                 temp++
        //                 // current.right = node
        //                 break
        //             }
        //             temp++
        //             current = current.right
        //         } else {
        //             temp++
        //             break
        //         }
        //     }
        //     if (temp > maxHeigth) {
        //         maxHeigth = temp
        //     }
        // }
        // return maxHeigth - 1


        // var height = -1
        // var key
        // for (key in root) {
        //     if (root[key] !== null) {
        //         var depth = this.getHeight(root[key]) + 1
        //         height = Math.max(depth, height)
        //     }
        // }
        // return height


        return (!root) ? -1 : 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))

        // return (!root || (!root.left && !root.right)) ? 0 : 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))

    }
    // Traversal / Traverse
    levelOrder(root = this.root) {

        const arr = JSON.stringify(root).match(/\d+/g).map(Number)
        let obj = {}
        let values
        if ((!root.left && !root.right) || !root) return 0
        for (let check of arr) {
            let node = new Node(check)
            let current = root
            let height = 0
            while (current) {
                if (node.data < current.data) {
                    if (!current.left) {
                        height++
                        break
                    }
                    height++
                    current = current.left
                } else if (node.data > current.data) {
                    if (!current.right) {
                        height++
                        break
                    }
                    height++
                    current = current.right
                } else {
                    height++
                    break
                }
            }
            if (obj.hasOwnProperty(height)) {
                obj[height].push(node.data)
            } else {
                obj[height] = [node.data]
            }
        }
        values = Object.keys(obj).map(x => obj[x])
        while (values.some(element => Array.isArray(element))) values = [].concat(...values)
        values.forEach(x => process.stdout.write(x + ' '))


        // let queue = [root]
        // while (queue.length > 0) {
        //     let node = queue.shift()
        //     process.stdout.write(node.data + " ")
        //     if (node.left) {
        //         queue.push(node.left)
        //     }
        //     if (node.right) {
        //         queue.push(node.right)
        //     }
        // }


    }
}


(function test() {
    let tree = new BinarySearchTree()

    // tree.add(3)
    // tree.add(5)
    // tree.add(2)
    // tree.add(1)
    // tree.add(4)
    // tree.add(6)
    // tree.add(7)

    tree.add(20)
    tree.add(50)
    tree.add(35)
    tree.add(44)
    tree.add(9)
    tree.add(15)
    tree.add(62)
    tree.add(11)
    tree.add(13)

    // console.log(JSON.stringify(tree))
    // console.log('removing 3')
    // tree.remove(3)
    // console.log(JSON.stringify(tree))
    // console.log('removing 4')
    // tree.remove(4)
    //     console.log(JSON.stringify(tree))
    // console.log(tree.getHeight())
    // console.log(JSON.stringify(tree))
    tree.levelOrder()

})()



//////////////////////////////////


// // Start of function Node
// function Node(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
// }; // End of function Node

// // Start of function BinarySearchTree
// function BinarySearchTree() {
//     this.insert = function (root, data) {
//         if (root === null) {
//             this.root = new Node(data);

//             return this.root;
//         }

//         if (data <= root.data) {
//             if (root.left) {
//                 this.insert(root.left, data);
//             } else {
//                 root.left = new Node(data);
//             }
//         } else {
//             if (root.right) {
//                 this.insert(root.right, data);
//             } else {
//                 root.right = new Node(data);
//             }
//         }

//         return this.root;
//     };

//     // Start of function getHeight
//     this.getHeight = function (root) {
//          return (!root) ? -1 : 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))
//     }; // End of function getHeight
// }; // End of function BinarySearchTree

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var _input = "";

// process.stdin.on('data', function (data) {
//     _input += data;
// });

// process.stdin.on('end', function () {
//     var tree = new BinarySearchTree();
//     var root = null;

//     var values = _input.split('\n').map(Number);

//     for (var i = 1; i < values.length; i++) {
//         root = tree.insert(root, values[i]);
//     }

//     console.log(tree.getHeight(root));
// });