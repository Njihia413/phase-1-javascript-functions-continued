//Functions can be hoisted
//ie they can be called before declaring them
razzle();

//Function declaration
// function razzle() {
//     console.log("You've been razzled!");
// }

function razzle (lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}

//Invoking the function
razzle();
razzle("Methuselah", "T'challah");

(function (baseNumber) {
    return baseNumber + 3;
})(2); //=> 5
