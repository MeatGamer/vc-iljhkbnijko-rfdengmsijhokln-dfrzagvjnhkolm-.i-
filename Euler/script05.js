// 23
// rasti daliklius
function dalikliai(n) {
    let s = 0
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            s += i
        }
    }
    return s
}
// surasti gausius skaicius
let gausus = []
for (let i = 1; i <= 28123; i++) {
    if (dalikliai(i) > i) {
        gausus.push(i)
    }
}
// kurie gali but
let gali = []
for (let i = 0; i <= 28123; i++) {
    gali[i] = false
}
// visu sumos
for (let i = 0; i < gausus.length; i++) {
    for (let j = i; j < gausus.length; j++) {
        let suma = gausus[i] + gausus[j]
        if (suma <= 28123) {
            gali[suma] = true
        }
    }
}
// sudeti visus negalincius
let ats = 0
for (let i = 1; i <= 28123; i++) {
    if (!gali[i]) {
        ats += i
    }
}
console.log(ats)