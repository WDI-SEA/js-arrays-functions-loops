/*
	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".

	Hint: Using a "switch" statement might result in cleaner code
*/

function getDayOFWeek(num) {
    var day
    switch (num) {
        case 0: day = 'Sunday'
            break

        case 1: day = 'Monday'
            break

        case 2: day = 'Tuesday'
            break

        case 3: day = 'Wednesday'
            break

        case 4: day = 'Thursday'
            break

        case 5: day = 'Friday'
            break

        case 6: day = 'Saturday'
            break

        default:
            day = "Invalid day";

    }

    return day;

}

theDate = new Date();

console.log("Today is ", getDayOFWeek(theDate.getDay()))