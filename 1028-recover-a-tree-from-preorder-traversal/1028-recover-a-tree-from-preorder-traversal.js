/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let stack = [];
    let i = 0;

    while (i < traversal.length) {
        let depth = 0;

        while (traversal[i] === '-') {
            depth++;
            i++;
        }

        let value = 0;

        while (
            i < traversal.length &&
            traversal[i] !== '-'
        ) {
            value = value * 10 + Number(traversal[i]);
            i++;
        }

        let node = new TreeNode(value);

        while (stack.length > depth) {
            stack.pop();
        }

        if (stack.length > 0) {
            let parent = stack[stack.length - 1];

            if (parent.left === null) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }

        stack.push(node);
    }

    return stack[0];
};