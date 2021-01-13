const arr = [3, 5, 2, 4, 9, 1]


//bubble Sort
function bubbleSort(newArr) {
    let len = newArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (newArr[j] > newArr[j + 1]) {
                let tmp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = tmp;
            }
        }
    }

    return newArr;
};


// Min sum 
function min() {
    let sum = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - (i + 1)]
    }
    return sum
}

console.log(bubbleSort(arr))
console.log(min(arr))