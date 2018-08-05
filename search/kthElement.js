function kthElement1(arr1, arr2, k) {
    if (arr1.length + arr2.length < k) {
        return null;
    }
    let m = 0;
    let n = 0;
    for (let i = 0; i < k; i++) {
        if (arr1[m] > arr2[n]) {
            n++;
        } else {
            m++;
        }
    }
    return Math.min(arr1[m], arr2[n]);
}
  
function kthElement2(arr1, arr2, k) {
    if (arr1.length + arr2.length < k) {
        return null;
    }

    let m = 0;
    let n = 0;
    const result = []; 
    for (let i = 0; i < arr1.length + arr2.length - 1; i++) {
        if (arr1[m] < arr2[n]) {
            result.push(arr1[m]);
            m++;
        } else {
            result.push(arr2[n]);
            n++;
        }
    }
    return result[k];
}

// test
const arr1 = [2, 3, 6, 7, 9];
const arr2 = [1, 4, 8, 10];

const arr3 = [100, 112, 256, 349, 770];
const arr4 = [72, 86, 113, 119, 265, 445, 892];

const z1 = kthElement1(arr1, arr2, 4);
const z2 = kthElement2(arr1, arr2, 4);

const z3 = kthElement1(arr1, arr2, 6);
const z4 = kthElement2(arr1, arr2, 6);

export {
    kthElement1,
    kthElement2
};