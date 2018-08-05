/**
 * 选择排序，每次选择出最小的元素，逐个放在前n-1个位置
 * 
 * @param {Array} arr
*/
function selectSort(arr = []) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i; // 与之比较的位置
        let j = i + 1;
        for (; j <= arr.length - 1; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (arr[i] > arr[minIndex]) {
            // change
            [ arr[i], arr[minIndex] ] = [ arr[minIndex], arr[i] ];
        }
    }

}

// test
const arr = [102, 123, 1, 19, 31, 8, 7];
selectSort(arr);

export default selectSort;