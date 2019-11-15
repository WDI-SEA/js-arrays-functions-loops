
Part 1

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];
for(var i of ages){
	console.log(ages[i])
}

Part 2

var younger = [];

for(var i=0; i<ages.length; i++){
  if(ages[i]<=20){
  younger.push(ages[i])
  }
}
console.log(younger)

Part 3
for(var i=younger.length-1;i>=0;i--){
  console.log(younger[i])
}

Part 4
var i=0;
while(i<ages.length){
  if(ages[i]<=20){
   younger.push(ages[i])
  }
   i++;
}
var newthing = younger.length-1;
while(newthing>=0){
  newthing--;
}
console.log(younger)


Part 5

const getDayOfWeek=(day) => {

	var dayString = ""
  
   switch(day) {
  
	case 1: 
	dayString =  "monday";
	break;
  
	case 2:
	dayString =  "tuesday";
	break;
  
	case 3:
	dayString =  "wednesday";
	break;
  
	case 4:
	dayString =  "thursday";
	break;
  
	case 5:
	dayString = "friday";
	break;
  
	default:
	dayString =  "please enter a valid day of week";
  
  }
  return dayString
  }
  console.log(getDayOfWeek(5))


  Part 6
  const addPepperoniToPizza = (array) => {

    if (array.indexOf('pepperoni')===-1){
      array.push('pepperoni')
      return array
    }
    else{
      return array;
    }
}


const addPepperoniToPizza = (array) => {

    if (array.indexOf('pepperoni')===-1){
      array.push('pepperoni')
    }
    return array
}



console.log(addPepperoniToPizza(['onion','olive','pineapple']))
