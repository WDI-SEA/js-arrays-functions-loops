var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];


//print all elemnts
var index = 0;

while (index < ages.length) {
    console.log(ages[index]);
    index++;
}

//array with all ages <= 20
var younger = [];

var position = 0;

while (position < ages.length) {
    if (ages[position] <= 20) {
        younger.push(ages[position]);
    }
    position++;
}

console.log(younger);

//reverse ages >= 20
var youngerReverse = [];

var int = ages.length - 1;

while (int > 0) {
    if (ages[int] <= 20) {
        youngerReverse.push(ages[int]);
    }
    int--;
}

console.log(youngerReverse);