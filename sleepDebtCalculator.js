const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 5;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 6;
  } else if (day === 'saturday') {
    return 5;
  } else if (day === 'sunday') {
    return 8;
  } else {
    return 'Error!'
  }
}

const getActualSleepHours = () => {
 return getSleepHours('monday') + 
         getSleepHours('tuesday') + 
         getSleepHours('wednesday') + 
         getSleepHours('thursday') + 
         getSleepHours('friday') + 
         getSleepHours('saturday') + 
         getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours  = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    console.log('You\'ve got the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You've got ${actualSleepHours - idealSleepHours} more sleep hours than nedeed.`)
   
  } else if(actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest, becouse you've slept ${idealSleepHours - actualSleepHours} hours less than you should have this week.`)
  } else {
    console.log('Something went wrong, check your code.')
  }
}
console.log(getSleepHours('monday'))
console.log(getActualSleepHours())
console.log(calculateSleepDebt())