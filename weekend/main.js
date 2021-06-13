//Hazırki tarixi götürüb yoxlayın ki, həftəsonu-durmu. Əgər həftəsonudursa true, əks halda false yazın.

let weekDay = [
    'bazar ertesi',
    'cersenbe axsami',
    'cersenbe',
    'cume axsami',
    'cume',
    'senbe',
    'bazar',
]
const toDay = new Date()
const weekend = weekDay[toDay.getDay()]
if (weekend == weekDay[5] || weekend == weekDay[6]) {
    console.log('hefte sonudur')
} else {
    console.log('hefte sonu deyil')
}
console.log(weekend)