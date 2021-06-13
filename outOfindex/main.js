// Verilmiş array-ın verilmiş elementini array-dən çıxarmaq

// Məsələn: [10,20,30,40,50,60,70], 50 => [10,20,30,40,60,70]

const arr = [10, 20, 30, 40, 50, 60, 70]
const a = 50
let ind = arr.indexOf(a)
const cut = arr.splice(ind, 1)
console.log(arr.slice(0, cut) + arr.slice(cut))