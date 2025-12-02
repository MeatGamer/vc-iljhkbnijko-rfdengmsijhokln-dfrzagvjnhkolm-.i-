// 3
let number = 600851475143
let x = 2
while (x * x < number) {
    while (number % x === 0) number /= x
    x++  // tikrina kita varianta
}

console.log(number)