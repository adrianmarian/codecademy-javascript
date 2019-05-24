let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let runnerAge = 18;

if(earlyReg && runnerAge > 18){
  raceNumber+=1000;
}

if(runnerAge > 18 && earlyReg){
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`)
} else if(runnerAge > 18 && !earlyReg){
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}`)
} else if(runnerAge < 18){
  console.log(`You will race at 12:30 pm and your race number is ${raceNumber}`)
} else {
  console.log(`Please see the registration desk.`)
}