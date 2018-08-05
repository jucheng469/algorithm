function deepFlatten1(arr = []) {
    while(arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

function allNumberFlatten(arr) {
    return arr.toString();
}

// test
const arr = [1, [2, 3, [4]]];

const newArr = deepFlatten2(arr);


