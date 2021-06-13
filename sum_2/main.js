// Size bir eded verilir o ededin reqemleri cemini tapan proqram yazin
//    Example: 2343 => 2+3+4+3=12

let a = 7182
let res = 0

while (a > 0) {
    let c = a % 10
    res += c
    a = Math.floor(a / 10)
    console.log(a)
}

console.log(res)