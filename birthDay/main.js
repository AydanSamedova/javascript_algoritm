//Ad gününüzə neçə gün qalıb? bunu tapmaq üçün proqram yazmaq (JS Date)
let now = new Date()
let birth = new Date('2021.3.29')
let result = birth - now
let dayMs = 1000 * 86400 // Bir gun milli second olaraq
console.log(result / dayMs)