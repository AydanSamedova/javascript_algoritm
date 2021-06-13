// Size soz verilir ve o sozde kicik herfleri boyuk herfe boyuk herfleri ise kicik
//    herfe cevirmek teleb olunur

const word = 'aydAn'
let newOrd = ''

for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
        newOrd += word[i].toLowerCase()
    } else {
        newOrd += word[i].toUpperCase()
    }
}
console.log(newOrd)