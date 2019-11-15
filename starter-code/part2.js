/*
	Part 2: Let's create a new variable, "younger", which holds an empty array.
	Using a for-loop, populate the "younger" array with numbers from the "ages"
	array which are less than or equal to 20.

	Hint: Use the for-loop to go through each element in the "ages" array.

	Hint: Use the array.push() method to add an element to the end of an array.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*/

const ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26]
const younger = (ages) => {
    for (let i = 0; i <= 20; i++) {
        console.log(ages[i])
    }
}

