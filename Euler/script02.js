// 17
const numberWords = {
    0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
    11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
    20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    100: "hundred", 1000: "thousand"
}

function numToWord(n) {
    if (n === 0) return "zero"
    if (n <= 19) return numberWords[n]
    if (n < 100) {
        const tens = Math.floor(n / 10) * 10
        const ones = n % 10
        return numberWords[tens] + numberWords[ones]
    }
    if (n < 1000) {
        const hundreds = Math.floor(n / 100)
        const rest = n % 100
        let result = numberWords[hundreds] + "hundred"
        if (rest > 0) {
            result += "and" + numToWord(rest)
        }
        return result
    }
    if (n === 1000) return "onethousand"
    return ""
}

let totalLetters = 0;
for (let i = 1; i <= 1000; i++) {
    totalLetters += numToWord(i).length
}

console.log(totalLetters)