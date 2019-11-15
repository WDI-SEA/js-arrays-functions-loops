/*
	Part 4: Now that you've finished the first 3 parts using a for-loop, repeat the same exercises
	(Part 1, Part 2, and Part 3) using a while-loop.
*/

//Part 1
var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];

var i = 0

while (i<ages.length) {
	console.log(ages[i])
	i++
}

//Part 2

i = 0

var younger = []

while (i<ages.length) {
	if (ages[i] <= 20) {
		younger.push(ages[i])
	}
  i++
}
console.log(younger)

//Part 3

var newYounger = []

i = younger.length-1

while (i >= 0) {
		newYounger.push(younger[i])
		i--
	}

console.log(newYounger)
	