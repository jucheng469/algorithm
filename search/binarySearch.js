/**
 * 循环版本的二分查找
 * 
 * @param {Array} arr 目标数组
 * @param {Number} target 目标数值
 *
 * @return {Number or NULL } position
*/
function binarySearch1(arr = [], target) {
    if (!arr.length) return null;
    if (arr.length === 1) return arr[0];

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) { // 剩下一个的情况
        const middle = Math.floor((right - left) / 2 + left);
        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return null;
}

/**
 * 递归版本的二分查找
 *
 * @param {Array} arr 目标数组
 * @param {Number} left 起始位置
 * @param {Number} right 结束位置
 * @param {Number} target 目标数值
 *
 * @return {Number or NULL } position
*/
function binarySearch2(arr, left, right, target) {
    if (left <= right) {
        const middle = Math.floor((right - left) / 2 + left);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] > target) {
            return binarySearch2(arr, left, middle - 1, target);
        } else {
            return binarySearch2(arr, middle + 1, right, target);
        }
    }
    return null;
}

export {
    binarySearch1,
    binarySearch2
}