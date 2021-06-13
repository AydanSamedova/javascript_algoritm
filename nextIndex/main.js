// Verilmiş array-ın verilmiş rəqəmindən sonra neçə elmentin olmasını yoxlamaq və onları console-da göstərmək

// Məsələn: [10,20,30,40,50,60,70], 50 => 2 element, 60, 70

const arr = [10, 20, 30, 40, 50, 60, 70]
const a = 50
const ind = arr.indexOf(a)
const len = arr.slice(ind + 1).length
const newArr = arr.slice(ind + 1)
console.log(`${len} element, ${newArr}`)