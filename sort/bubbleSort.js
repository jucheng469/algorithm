/**
 * 冒泡排序 相邻元素之间相互比较 交换
 * 需要交换前arr.length - 1个元素，每个元素交换arr.length - i - 1次
 * @param {Array} arr
*/
function bubbleSort(arr = []) {
    if (arr.length < 2) return arr;

    for(let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换
                [arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
            }
        }
    }
}

// test
const arr = [102, 123, 1, 19, 31, 8, 7];
bubbleSort(arr);

// change
function change(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

export default bubbleSort;