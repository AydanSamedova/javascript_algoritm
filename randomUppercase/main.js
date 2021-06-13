//"azerbaycan" sözündə random sırada çıxmış bir hərfi böyük hərflə əvəzləmək. <br> Məsələn: random çıxan rəqəm 4 oldu, onda belə olur "azeRbaycan" <br> random çıxan rəqəm 7 olsa, onda belə olur "azerbaYcan"

// let word = 'azerbaycan'
// let up = word[Math.floor(Math.random() * 10)].toUpperCase()
// console.log(up)

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const randToUpper = (word) => {
    const rand = random(1, word.length)

    console.log(rand)

    const upper = word[rand - 1].toUpperCase()
    const part1 = word.slice(0, rand - 1)
    const part2 = word.slice(rand)

    return part1 + upper + part2
}

console.log(randToUpper('aydan'))