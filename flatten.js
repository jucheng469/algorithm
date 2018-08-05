function flatten1(arr = []) {
    // return [].concat.apply([], arr);
    return Array.prototype.concat.apply([], arr);
}

function flatten2(arr = []) {
    return arr.reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
}

// test
const arr = [1, [2, 3, [4]]];

const newArr = flatten2(arr);


