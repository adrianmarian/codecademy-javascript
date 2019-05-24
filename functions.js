
// Clasic function expression definition with if statement
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Arrow function with ternary operator
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false
}

//Concise Arrow Notation - if the function has only one parameter we can remove the curly braces, the parentheses and the 'return' from the function as in the above example:
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


console.log(plantNeedsWater('Tuesday'))