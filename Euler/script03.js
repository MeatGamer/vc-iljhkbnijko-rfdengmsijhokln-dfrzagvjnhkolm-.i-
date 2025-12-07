// 20
let ats = 1n
for (let i = 1n; i <= 100n; i++) {
    ats *= i
}
//i string pavercia
let tekstas = ats.toString()

let suma = 0
for (let i = 0; i < tekstas.length; i++) {
    suma += parseInt(tekstas[i])
}

console.log(suma)