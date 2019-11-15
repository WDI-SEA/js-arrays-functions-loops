var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
let youngerReverse = [];

for (var i = ages.length - 1; i >= 0; i--) {
    if (ages[i] <= 20) {
        youngerReverse.push(ages[i]);
    }
}

console.log(youngerReverse);