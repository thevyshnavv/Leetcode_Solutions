/**
 * @param {number} num
 * @return {number}
 */
function countEven(num) {
    let sum = 0;
    let n = num;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum % 2 === 0 ? Math.floor(num / 2) : Math.floor((num - 1) / 2);
}