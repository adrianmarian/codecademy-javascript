let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
  "Active Mission": true,
  "Secret Mission": "Discover life outside of Earth."
};

let crewCount = spaceship.numCrew;
console.log(`The crew has ${crewCount} members.`);
let planetArray = spaceship.flightPath;

planetArray.forEach(planet => {
  console.log(`The ship will go on ${planet}`);
});

let isActive = spaceship["Active Mission"];
if (isActive) {
  console.log("The spaceship is on mission!");
} else {
  console.log("The spaceship is not on an active mission");
}

let secretMission = spaceship["Secret Mission"];
if (secretMission) {
  console.log(`The spaceship mission is: ${secretMission}`);
}

// Property Assignment
// It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
const spaceship1 = { type: "shuttle" };
spaceship1 = { type: "alien" }; // TypeError: Assignment to constant variable.
spaceship1.type = "alien"; // Changes the value of the type property
spaceship1.speed = "Mach 5"; // Creates a new key of 'speed' with a value of 'Mach 5'

//Change property value
spaceship1.color = "glorious gold";

//Add new property
spaceship.numEngines = 10;

//Methods in Objects

// Basic function model to create methods
// const alienShip = {
//   invade: function() {
//     console.log(
//       "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
//     );
//   }
// };
// Arrow function model to create methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = {
  invade() {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
    );
  },

  retreat() {
    console.log(retreatMessage);
  },

  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};


alienShip.invade();
alienShip.retreat();
alienShip.takeOff();