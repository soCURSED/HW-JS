let characters = [
  {
    name: "Faisal",
    height: 165,
    gender: "male",
    mass: 180,
    eyeColor: "black",
  },
  {
    name: "Ali",
    height: 115,
    gender: "male",
    mass: 84,
    eyeColor: "grey",
  },
  {
    name: "Nada",
    height: 210,
    gender: "female",
    mass: 90,
    eyeColor: "brown",
  },
  {
    name: "Fatima",
    height: 150,
    gender: "female",
    mass: 70,
    eyeColor: "green",
  },
];

// --- map
//Get array of objects with just name and height properties
let storeInfo = [];
let characterMapNameHeight = characters.map((character) => {
  storeInfo.push(character.name);
  storeInfo.push(character.height);
});
console.log(storeInfo);

//Get array of all first names
let characterMapName = characters.map((character) => {
  return "Name: " + character.name;
});
console.log(characterMapName);

// --- REDUCE
// Get total mass of all characters
const sum = 0;
let characterReduceMass = characters.reduce(
  (sum, characters) => sum + characters.mass,
  0
);
console.log("Total mass: " + characterReduceMass);

// Get total number of characters in all the character names
let resultChars = [];
let totalChars = "";
let noSpaceNames = "";
let characterReduceCount = characters.reduce((totalChar, character) => {
  resultChars.push(character.name);
  totalChars = resultChars.join().trim(" ");
  noSpaceNames = totalChars.replace(/ /g, "");
});
console.log(noSpaceNames.length);

// --- FILTER
//get character mass more than 100
const characterFilter = characters.filter(function (characterMassMoreThan) {
  return characterMassMoreThan.mass >= 100;
});
console.log(characterFilter);

// get all female char
const characterGender = characters.filter(function (characterGenderFilter) {
  return characterGenderFilter.gender === "female";
});
console.log(characterGender);

// --- SORT
//Sort by name
var SortName = characters.sort((a, b) => {
  const nameA = a.name;
  const nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});
console.log(SortName);

//Sort by gender
var SortGender = characters.sort((a, b) => {
  const nameA = a.gender;
  const nameB = b.gender;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});
console.log(SortGender);

// --- EVERY
//Does every character have blue eyes?
var everyEye = characters.every((checkThem) => {
  return checkThem.eyeColor === "black";
});
console.log(everyEye);

//Is every character male?
var everyGender = characters.every((checkThemGender) => {
  return checkThemGender.gender === "male";
});
console.log(everyGender);

// --- SOME
//Is there at least one male character?
var someMale = characters.some((someM) => {
  return someM.gender === "male";
});
console.log(someMale);

//Is there at least one character that has mass less than 50?
var someMass = characters.some((someMasss) => {
  return someMasss.mass < 50;
});
console.log(someMass);

/*
******************************************************** 

*************************s API **************************

******************************************************** 
*/
