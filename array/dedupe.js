/**
 * 数组去重
 * Remove duplicates from an array
 * 
 * @param {Array} arr 数组，元素可以是基本数据类型，也可以是引用数据类型
 * @param {Function} hash method
 * 
 * @return {Array} result
*/
function dedupe(arr, hasher = JSON.stringify) {
    const lookup = {};
    const result = [];

    for(let item of arr) {
        const hashed = hasher(item);
        if (!lookup[hashed]) {
            result.push(item);
            lookup[hashed] = true;
        }
    }

    return result;
}

// test
const arr = [1, 2, 3, 3, 4, 4, 5];
console.log(dedupe(arr));

const arr2 = [{a: 1}, {a: 1}, {a: 2}, {a: 2}];
console.log(dedupe(arr2));

const arr3 = [{a: 1, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 2, b: 3}];
console.log(dedupe(arr3, item => item.b));