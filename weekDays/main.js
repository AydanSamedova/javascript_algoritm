//Hazırki günü və vaxtı göstərən proqram yazmaq
let weekDay = [
    'bazar ertesi',
    'cersenbe axsami',
    'cersenbe',
    'cume axsami',
    'cume',
    'senbe',
    'bazar',
]
let day = new Date()
let hours = day.getHours()
let minutes = day.getMinutes()
let seconds = day.getSeconds()
let time = hours + ':' + minutes + ':' + seconds

let result = weekDay[day.getDay() - 1] // 0-inci indexi evezine -1 yazdim
console.log('Bugun ' + result + ' saat ' + time)