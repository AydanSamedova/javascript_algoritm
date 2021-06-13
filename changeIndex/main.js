// Verilmiş array-ın verilmiş index-dəki dəyəri, verilmiş index-ə sürüşdürmək

// Məsələn: [10,20,30,40,50,60,70], 0, 2 => [20,30,10,40,50,60,70]

// ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"], 2, 5 => ["BMW", "Fiat", "Audi", "Opel", "Bentley", "Mercedez"]

const arr = [10, 20, 30, 40, 50, 60, 70]
const x = 0
const y = 2

let elem = arr[x]
arr.splice(x, 1)

arr.splice(y, 0, elem)

console.log(arr)