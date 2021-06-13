//  Verilmiş rəqəmin tam(целая) və kəsr(дробь) hissəsinə(часть) ayırıb, toplamaq(сложить).

// Məsələn: 1.7 => 8, 5.18 => 14, 10.5=> 15

const num = 1.7
const tam = Math.floor(num)
const kesr = (num - tam) * 10
const res = tam + kesr
console.log(res)