// 20
// masyvas
let mass = [1];

for (let i = 2; i <= 100; i++) {
    // daugina is i
    let left = 0
    for (let j = 0; j < mass.length; j++) {
        let abc = mass[j] * i + left
        mass[j] = abc % 10 // paskutinis sk lieka
        left = Math.floor(abc / 10) // perkele
    }
    // jei lieka prideda nauja sk
    while (left > 0) {
        mass.push(left % 10)
        left = Math.floor(left / 10)
    }
}
// mass pavirsta atvirkscias

// suma
let sum = 0;
for (let i = 0; i < mass.length; i++) {
    sum += mass[i]
}

console.log(sum)