// Write a function that rearranges an integer into its largest possible value.

// Examples:
// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21

function superSize(num){
    const digits = num.toString().split('')
    const noStringNumbers = digits.map(Number)

        function sortNumbers(a, b) {
            return b - a
        }

        const correctOrder = noStringNumbers.sort(sortNumbers)
        const number = correctOrder.join('')
        const superSizeMe = parseInt(number)

        return superSizeMe
}

console.log(superSize(69))
console.log(superSize(513))