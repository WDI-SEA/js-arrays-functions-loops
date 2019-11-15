
var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var younger = []
for (i = 0; i < ages.length; i++) {
	if (ages[i] <= 20) {
		younger.push(ages[i])
		
	};
};
console.log(younger); 