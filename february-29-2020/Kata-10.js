// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

function reverseSeq(n) {
	let answer = []

	for (let i = n; i > 0; i--) {
		answer.push(i)
	}

	return answer
}

console.log(reverseSeq(5))

// Completed
