// Verilmiş array-ın verilmiş rəqəminin hansı index-lər aralığında yerləşməsini tapmaq

// Məsələn: [10,20,30,40,50,60,70], 50 => 3 və 5

const arr = [10, 20, 30, 40, 50, 60, 70]
const a = 50
const ind = arr.indexOf(50)
console.log(ind - 1, ind + 1)