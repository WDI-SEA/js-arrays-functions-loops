var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var younger = [];
// part 1
for (var i = 0; i < ages.length; i++){
    console.log(ages[i])
}
// part 2
for (var i = 0; i < ages.length; i++){
    if (ages[i] <= 20){
        younger.push(ages[i])
    } 
    
}
console.log(younger);
//part 3
for (var i = younger.length - 1; i >= 0; i--){
    console.log(younger[i])
}

