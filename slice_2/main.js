//JavaScript sözünün ilk və son hərfinin yerini dəyişmək. Məsələn: javascript => tavascripj
let word = 'javascript'
console.log(word.slice(-1) + word.slice(1, -1) + word.slice(0, 1))