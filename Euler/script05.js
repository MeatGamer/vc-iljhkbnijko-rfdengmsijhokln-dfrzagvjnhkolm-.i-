// 23
function rastDaliklius(skaicius) {
    let suma = 0
    for (let i = 1; i <= skaicius / 2; i++) {
        // dalijasi be liekanos
        if (skaicius % i === 0) {
            suma += i
        }
    }
    return suma
}
let gaususSkaiciai = []
for (let i = 1; i <= 28123; i++) {
    let dalikliuSuma = rastDaliklius(i)
    if (dalikliuSuma > i) {
        gaususSkaiciai.push(i)
    }
}
let galiButiSuma = []
for (let i = 0; i <= 28123; i++) {
    galiButiSuma[i] = false
}
for (let i = 0; i < gaususSkaiciai.length; i++) {
    for (let j = i; j < gaususSkaiciai.length; j++) {
        let suma = gaususSkaiciai[i] + gaususSkaiciai[j]
        if (suma <= 28123) {
            galiButiSuma[suma] = true
        }
    }
}
let galutineSuma = 0
for (let i = 1; i <= 28123; i++) {
    if (galiButiSuma[i] === false) {
        galutineSuma = galutineSuma + i
    }
}
console.log(galutineSuma)