const a = 'aydan'
let b = ''

const reverse = (str) => {
        for (let i = str.length - 1; i >= 0; i--) {
            b += str[i]
        }
        return b
    }
    // return funksiyani dayandirir
    // for - in icine salanda hem
    // for u hemde funksiyani saxlayir
    // console.log(reverse(a))