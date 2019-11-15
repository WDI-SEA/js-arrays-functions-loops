/* 	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".

	Hint: Using a "switch" statement might result in cleaner code */

	const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

	var myDay = 1

	const getDayOfWeek = (day) => {
		if ((day-1>=0) && (day-1<=6) && Number.isInteger(day) === true){
			console.log("Today is " + daysOfTheWeek[day-1])
		}
		else {
			console.log("Please enter a valid day of the week")
		}
	}

getDayOfWeek(myDay)