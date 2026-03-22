/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = [];

    for (let op of ops) {
        if (op === "C") {
            stack.pop();
        } else if (op === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (op === "+") {
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];
            stack.push(last + secondLast);
        } else {
            stack.push(Number(op));
        }
    }

    return stack.reduce((sum, num) => sum + num, 0);
};