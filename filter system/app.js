let arr = [1, 4, 56, 23, 67, 89, 145, 89, 200, 35]

//even numbers function
const evenNum = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }
}

//odd numbers function
const oddNum = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i])
        }
    }
}

// min 10  numbers function
const minNum = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            console.log(arr[i])
        }
    }
}

//digital numbers function
digiNum = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 100 && arr[i] > 9) {
            console.log(arr[i])
        }
    }
}

//system

/*
 tek ededler ucun 1 secin

cut ededler ucun 2 secin

10 - dan kicin ededler ucun 3 secin

2 reqemli ededler ucun 4 secin

 */

var secim = '1'
const system = () => {
    if (secim == '1') {
        console.log(evenNum())
    }
    if (secim == '2') {
        console.log(oddNum())
    }
    if (secim == '3') {
        console.log(minNum())
    }
    if (secim == '4') {
        console.log(digiNum())
    }
}

system()