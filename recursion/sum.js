/**
 * 求1-n的和。同理求n的阶乘
 * @param {Number} n
*/

function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}

// test
const total = sum(10);


/**
 * 一组乱序的硬币，相邻的不能选，怎么选能拿最多钱。
 * F(n) = Max(c0 + F(n-2), F(n-1))
 * 递归
 * 
 * @param {Array} arr
*/
function coinRow(arr = []) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return Math.max(arr[0], arr[1]);

    return Math.max(arr[0] + coinRow(arr.slice(2)), coinRow(arr.slice(1)));
}

/**
 * 一组乱序的硬币，相邻的不能选，怎么选能拿最多钱。
 * F(n) = Max(c0 + F(n-2), F(n-1))
 * 动态规划
 * 
 * @param {Array} arr
*/
function coinRow2(arr = []) {
    if (arr.length === 0) return 0;
    
    const result = [];
    if (arr.length >= 1 ) result[0] = arr[0];
    if (arr.length >= 2) result[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) { // 规模
        let q = Math.max(arr[i] + result[i - 2], result[i - 1]);
        result[i] = q;
    }

    return result;
}


// test
const arr = [5, 1, 2, 10, 6, 2];
const num = coinRow(arr);