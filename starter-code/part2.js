//part 4

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var younger = [];
var i = 0;
while(i < ages.length){
    console.log(ages[i])
    i++
}

var x = 0;
while(x < ages.length){
    if (ages[x] <= 20){
        younger.push(ages[x])
    }
    x++
}
console.log(younger);

var z = younger.length - 1;
while (z >= 0){
    console.log(younger[z])
    z--
}
