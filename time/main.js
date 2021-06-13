let today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1 //The getMonth() method returns the month of a date as a number from 0 to 11.
let day = today.getDate()
let time = year + '/' + month + '/' + day
console.log(time)