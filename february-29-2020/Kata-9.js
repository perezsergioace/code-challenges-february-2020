// Complete the square sum function so that it squares each number passed into it
// and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
	const squaredNumbers = numbers.map((number) => {
		return Math.pow(number, 2)
	})

	const result = squaredNumbers.reduce(function(a, b) {
		return a + b
	}, 0)

	return result
}

console.log(squareSum([ 1, 2 ]))
console.log(squareSum([ 0, 3, 4, 5 ]))
