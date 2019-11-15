var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getDayOfTheWeek = (arr, num) => {
    if (num <= arr.length) {
        console.log(days[num])
    } else {
        console.log("Please enter a valid day of the week.")
    }
}
getDayOfTheWeek(days, 1)