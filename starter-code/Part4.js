var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var i = 0
while (i < ages.length) {
    console.log(ages[i])
    i++ 
}

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
var younger = []
var i = 0
while (i < ages.length) {
    if (ages[i] <= 20) {
    younger.push(ages[i])
    }
    i++
}
    console.log(younger)

var younger = [ 17, 14, 12, 20, 13 ];
var i = younger.length - 1
while (i >= 0) {
    console.log(younger[i])
    i--
}
