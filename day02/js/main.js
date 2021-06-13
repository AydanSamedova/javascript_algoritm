const arr = [1, 2, 3, 4, 5]
let tek = 0
let cut = 0

for (let i = 0; i < arr.length + 1; i++) {
    if (i % 2 == 0) {
        // console.log(i)
        cut += i
    } else {
        // console.log(i)
        tek += i
    }
}
console.log(String(tek) + String(cut))
    //====
let arr1 = ['aydan', 'koroglu', 'qacmayaq nebi', 'qacaq nebi', 'superman'];
let maxLen = 0; //indexlerin uzunluq sayi
let res = ''; //en boyuyu cixarib res-e beraber olacaq

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length > maxLen) {
        maxLen = arr1[i].length
        res = arr1[i]
    }
}

console.log(res, maxLen)


//====
const word = 'ayaqlarly' //eyni herfleri sil
let neWord = ''
let double = ''

for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
        if (word[i] == word[j]) {
            neWord += word[i]
        }
    }
    if (word.indexOf(word[i], i + 1)) {
        console.log(word[i])
        break
    }
}
console.log(neWord)



//===
const word = 'saturn'
let duplicate = '' // al
let wordNews = ''

for (let i = 0; i < word.length; i++) {
    if (duplicate.indexOf(word[i]) >= 0) {
        continue
    }

    if (word.indexOf(word[i], i + 1) >= 0) {
        // tapmishamsa
        duplicate += word[i]
        continue
    }

    wordNews += word[i]
}

console.log(wordNews)