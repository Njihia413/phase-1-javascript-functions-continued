// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("practise coding!");

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

mondayWork("attend standups");

const wrapAdjective = function(highlight = "*") {
    return function(adjective = "special") {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}