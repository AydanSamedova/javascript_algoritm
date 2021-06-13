// <li>Adınızın 2 və 3-cü hərfini böyük hərflə yazmaq <br> Məsələn: anar => aNAr</li>
let name = 'aydan'
let h = name.slice(1, 2) + name.slice(2, 3)
console.log(name.slice(0, 1) + h.toUpperCase() + name.slice(3))