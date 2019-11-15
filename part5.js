
const getDayOfWeek = (day) => {

    var daysOfWeek = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
    }

    var arr = Object.keys(daysOfWeek).map(Number);

        if (arr.includes(day)) {
            console.log(daysOfWeek[day]);
            return daysOfWeek[day];
        } else {
            console.log("Please enter a valid day of the week.")
            return "Please enter a valid day of the week.";
        }

    }

getDayOfWeek(1);