// Array-də lazımı əməliyyatları edəndən sonra “Mercedez - Audi - Opel” string-ini yaratmaq.
// ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"]

const arr = ['BMW', 'Fiat', 'Mercedez', 'Audi', 'Opel', 'Bentley']
const arr2 = arr.slice(2, 5)
console.log(arr2.join('-'))