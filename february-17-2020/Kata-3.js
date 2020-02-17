// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
    // your code
    return +`${n}`.replace(/0*$/, "");
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(960000))
console.log(noBoringZeros(1050))
console.log(noBoringZeros(-1050))

// Completed
