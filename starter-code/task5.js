/*
	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".

	Hint: Using a "switch" statement might result in cleaner code
*/

var dayOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const getDayOfWeek = (arr, num) => {
    if (num <= arr.length) {
        console.log(arr[num]);
    }
    else {
        console.log("Please enter a valid day of the week.")
    }
}
getDayOfWeek(dayOfWeek, 19);
