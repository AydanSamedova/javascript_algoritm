//Verilmiş ədədin 1-10 arasında çıxarılmış random ədəd ilə uyğun gəlib-gəlməmisini yoxlamaq. Əgər uyğundursa “uygundur”, //deyilsə “uygun deyil” yazılsın

const myNum = 6
const randNum = Math.floor(Math.random() * 10)
console.log(randNum)

if (myNum == randNum) {
    console.log('uygundur')
} else {
    console.log('uygun deyil')
}