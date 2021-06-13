// Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək

const a = 'aysdsadsd'
let new1
if (a.length >= 3) {
    new1 = a.slice(0, -3).toUpperCase() + a.slice(-3).toLowerCase()
} else {
    new1 = a.toUpperCase()
}

console.log(new1)