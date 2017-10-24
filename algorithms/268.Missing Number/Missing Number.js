/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    var len = nums.length;

    var sum = len * (len + 1) / 2;

    var sum1 = nums.reduce((sum, value) => value + sum, 0);

    return sum - sum1;

};