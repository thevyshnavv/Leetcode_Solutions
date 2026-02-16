/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvin = celsius +273.15
    const fahrenheit = celsius * 1.80 + 32.00
    const ans = [kelvin,fahrenheit]
    return ans
};
console.log(convertTemperature(36.50))