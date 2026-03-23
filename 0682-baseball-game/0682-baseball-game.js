/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    stack = []
    for(let element of operations){
        if(element==="C"){
            stack.pop()
        }else if(element==="D"){
            stack.push(stack[stack.length-1]*2)
        }else if(element==="+"){
            let last = stack[stack.length-1]
            let secondLast = stack[stack.length-2]
            stack.push(last+secondLast)
        }else {
            stack.push(Number(element))
        }
    }return stack.reduce((sum,num)=>sum+num,0)
};