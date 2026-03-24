/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let l = dimensions[i][0];
        let w = dimensions[i][1];

        let diagonal = l * l + w * w;
        let area = l * w;

        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = area;
        } else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};