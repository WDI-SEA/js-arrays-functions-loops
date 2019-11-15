/*
	Part 3: We're comfortable going through an element from beginning to end, but let's
	flip this around. With the new "younger" array you created in the last part,
	print out the elements so that the last element is printed out first, and the
	first element is printed out last.

	Hint: What should the index for your for-loop be initialized to if we want to start
	at the end of the array?

	Hint: What would the conditional for your for-loop look like?
*/

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];

var younger = []

for (i=0; i<ages.length; i++) {
	if (ages[i] <= 20) {
		younger.push(ages[i])
	}
}
	console.log(younger)

var newYounger = []

for (i = younger.length-1; i >= 0; i--) {
		newYounger.push(younger[i])
	}

	console.log(newYounger)
	
