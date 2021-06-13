// Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olmasini yoxlamaq. true ve ya false qaytarmaq
// meselen: [7, 8] => false
//     [9, 3, 7, 8] => true

const arr = [0, 2, 6]
const num1 = arr.indexOf(1) //yoxdursa -1 qaytarir
const num2 = arr.indexOf(3)
if (num1 > 0 || num2 > 0) {
    console.log(true)
} else {
    console.log(false)
}