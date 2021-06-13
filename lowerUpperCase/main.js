//javaSCRIPT sözün son 3 hərfini kiçik hərflə, VA hissəsini böyük hərflə yazmaq
let js = 'javascript'
console.log(
    js.slice(0, 3).toLowerCase() + js.slice(3, 5).toUpperCase() + js.slice(5)
)