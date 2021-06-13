// Verilmiş 2 ədədin 30-70 arasında olmasını yoxlamaq. Rəqəmlərin hər ikisinin, yalnız birinin və
//ya heç birinin aralıqda olub-olmaması şərtlərini yoxlamaq və uyğun mesajı çıxarmaq.

let num1 = 30
let num2 = 70
if (num1 >= 30 && num1 <= 70 && num2 >= 30 && num2 <= 70) {
    console.log(true)
} else {
    console.log(false)
}