const addPepperoniToPizza = (ingredients) => {
    if (ingredients.includes("pepperoni")) {
        console.log(ingredients);
        return ingredients;
    } else {
        ingredients.push("pepperoni");
        console.log(ingredients);
        return ingredients;
    }
}

addPepperoniToPizza(['olives', 'pineapple', 'spinach']);
addPepperoniToPizza(['olives', 'pineapple', 'pepperoni', 'spinach']);


//other possible solution using indexOf

// const addPepperoniToPizza = (ingredients) => {
//     if (ingredients.indexOf('pepperoni') >=0 && ingredients.indexOf('pepperoni') <= ingredients.length - 1)  {
//         console.log(ingredients);
//         return ingredients;
//     } else {
//         ingredients.push("pepperoni");
//         console.log(ingredients);
//         return ingredients;
//     }
// }

// addPepperoniToPizza(['olives', 'pineapple', 'spinach']);
// addPepperoniToPizza(['olives', 'pineapple', 'pepperoni', 'spinach']);