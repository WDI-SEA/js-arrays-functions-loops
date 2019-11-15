/*
	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".

	Hint: Using a "switch" statement might result in cleaner code
*/

//if test , <=7, log index of array (-1 to make sure you ca access index 0)

let weekDays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]

let getDayOfWeek = (day) => {
    if (day <= 7) {
        console.log(weekDays[day - 1])
    }
    else {
        console.log("Please enter a valid day of the week")
    }
}

getDayOfWeek(1)

