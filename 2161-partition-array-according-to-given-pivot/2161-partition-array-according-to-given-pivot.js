/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let less =[]
    let equal = []
    let greater = []
    for(let num of nums){
        num<pivot?less.push(num)
        :num===pivot?equal.push(num)
        :greater.push(num)
    }return[...less,...equal,...greater]
};