// 全部扁平化

function deepFlatten1(arr = []) {
    while(arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

// 全是数字、字符串时的简洁做法
function allNumberFlatten(arr) {
    return arr.toString();
}

// recursion 尾递归？
function flattenV3(arr) {
    // flatten helper
    function flatten(arr, res) {
        for (let item of arr) {
            Array.isArray(item) ? flatten(item, res) : res.push(item);
        }
        return res;
    }

    const res = [];
    flatten(arr, res);
    return res;
}

// test
const arr = [1, [2, 3, [4]]];

const newArr = deepFlatten2(arr);


