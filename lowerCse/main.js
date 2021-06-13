//Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə //çevirmək

const word = 'sa'
if (word.length > 3) {
    console.log(word.slice(0, 3).toUpperCase() + word.slice(3))
} else {
    console.log(word.toUpperCase())
}