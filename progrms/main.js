// Verilmiş 2 rəqəmin biri 5 və ya bu iki rəqəmin fərqi 5-dirsə true, əks halda false qaytarsın
// Məsələn: 33, 5 => true,  21,16 => true,  33, 16 => false
const num1 = 2
const num2 = 15

if (num1 === 5 || num2 === 5 || num1 - num2 === 5 || num2 - num1 === 5) {
    console.log('uygyndr')
} else {
    console.log('uygun deyil')
}

//Elə proqram yazın ki, verilmiş cümlənin əvvəlinə verilmiş simvolları əlavə etsin. Əgər həmin
//simvollar verilmiş cümlənin əvvəlində varsa, verilmiş cümlənin özünü göstərsin.
//Məsələn: proqramlasdirma, proq => proqramlasdirma
//proqramlasdirma, veb => vebproqramlasdirma
const sentence = 'proqramlasdirma'
const find = 'veb'

if (sentence.slice(0, find.length) === find) {
    console.log(sentence)
} else {
    console.log(find + sentence)
}

//Verilmiş sözün, verilmiş hərfindən əvvəlki hərfini tapıb, Azərbaycan əlifbasında ondan sonra gələn hərfi göstərmək. Əgər əlifbada sonuncu hərfdirsə, elə özünü göstərmək
//Məsələn: salam, l => b ,  nizam, a => z ,  elman, a => n

const alph = 'abcçdeəfgğhxıijkqlmnoöprsştuüvyz'
let word = 'aydan'
let res = ''

for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < alph.length; j++) {
        if (word[i] == alph[j]) {
            res += alph[j + 1]
        }
    }
}
console.log(res)

const next = (alp, str) => {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alp.length; j++) {
            if (word[i] == alp[j]) {
                res += alp[j + 1]
            }
        }
    }
    return res
}
const alph = 'abcçdeəfgğhxıijkqlmnoöprsştuüvyz'
let word = 'aydan'

console.log(next(alph, word))