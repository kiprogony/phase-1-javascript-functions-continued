// code your solution here
function saturdayFun (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
  //console.log(`This saturday, I want to ${activity}!`);
}
function mondayWork (activity2 = "go to the office") {
  return `This Monday, I will ${activity2}.`;
}


let wrapAdjective = function(style="a good programmer") {
  return function(adjective = "special") {
    return `You are ${style}${adjective}${style}!`
  }
}

