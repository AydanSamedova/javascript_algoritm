// let word = "aydan";
// let neWord = '';

// for (let i = word.length - 1; i >= 0; i--) {
//     neWord += word[i]
// }

// console.log(neWord)

//task 02
// const alph = 'abcçdeəfgğhxıijkqlmnoöprsştuüvyz';
// let myWord = 'ahid';
// let res = ''
// for (let i = 0; i < myWord.length; i++) {
//     for (let j = 0; j < alph.length; j++) {
//         if (myWord[i] == alph[j]) {
//             res += alph[j + 1]
//         }
//     }
// }
// console.log(res)


//task 03
// let arr = [16, 3, 12, -10, 34]
// let max = 0

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }

// }
// console.log(max)

// const change = (arr, max) => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = max
//     }
//     return arr
// }

// console.log(change(arr, max))


//task 04
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const a = arr.indexOf(3)
// const b = arr.indexOf(1)

// if (a > 0 || b > 0) {
//     //yoxdursa -1 qaytarir
//     console.log(true)
// } else {
//     console.log(false)
// }

//task 05
// const isTwice = (arr, num) => {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (num == arr[i]) {
//             count++
//         }
//     }

//     if (count > 2) {
//         return 'There is more than 2 num'
//     } else if (count == 2) {
//         return true
//     }

//     return false
// }

// console.log(isTwice([53, 90, 30, 30, 30, 21], 30))
// console.log(isTwice([53, 90, 30, 21, 30], 30))

//task 06
// let a = 555;
// let res = 0;

// while (a > 0) {
//     let c = a % 10
//     res += c
//     a = Math.floor(a / 10)

// }
// console.log(res)

//task 07

// const arr = ["pro", "p", "proqr", "pr", "proqram", "proq", "proqra"]
// let arrLen = 0;
// let res = ''
// for (let i = 0; i < arr.length; i++) {
//     if (arrLen < arr[i].length) {
//         arrLen = arr[i].length
//         res = arr[i]
//     }
// }
// console.log(res)


//task 08
// const arr = [3, 1, 2, 5, 4];
// let cut = 0
// let tek = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         cut += arr[i]
//     } else { tek += arr[i] }
// }
// console.log(String(tek) + String(cut))


//task 12
// const soz = 'abbaas';
// let res = ''
// for (let i = 0; i < soz.length; i++) {
//     if (soz[i] == soz[i + 1]) {
//         res += soz[i]
//     }
// }

// console.log(res)

//task 10
const arr1 = [10, 3, 29, 15];
const arr2 = [15, 10, 3, 29];
for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            console.log(true)
        }
    }

}