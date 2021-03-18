// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   let wordInput= input.question(`Enter a word to score:`)
  //  console.log(oldScrabbleScorer(wordInput))
  //  console.log(simpleScore(wordInput))
  //  console.log(vowelBonusScore(wordInput))
  console.log(`Score for '${wordInput}': ${scorerPrompt()(wordInput)}`)
};

let simpleScore=function(word){
  const simplePointStructure={
  0:[` `],
  1:[`B`,`C`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`M`,`N`,`P`,`Q`,`R`,`S`,`T`,`V`,`X`,`Z`,`A`,`E`,`I`,`O`,`U`,`Y`]
}
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue)
		 }
 
	  }
	}
	return letterPoints;
 }


let vowelBonusScore=function(word){
  const vowelPointStructure={ 
  0:[` `],
  1:[`B`,`C`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`M`,`N`,`P`,`Q`,`R`,`S`,`T`,`V`,`X`,`Z`],
  3:[`A`,`E`,`I`,`O`,`U`,`Y`]}
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue)
		 }
 
	  }
	}
	return letterPoints;
 }
let scrabbleScore = function(word){

	word = word.toLowerCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
    letterPoints+=Number(newPointStructure[word[i]])
	}
	return letterPoints;
 }

const scoringAlgorithms = [{name:`Simple Score`,description:`Each letter is worth 1 point.`,scorerFunction:simpleScore},{name:`Bonus Vowels`,description:`Vowels are 3 pts, consonants are 1 pt.`,scorerFunction:vowelBonusScore},{name:`Scrabble`,description:`The traditional scoring algorithm.`,scorerFunction:scrabbleScore}];

function scorerPrompt() {
let scoringTemplete=``
while(!(scoringTemplete===`0`||scoringTemplete===`1`||scoringTemplete===`2`)){
 scoringTemplete = input.question(`Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2:`)
}
return scoringAlgorithms[scoringTemplete].scorerFunction
}

function transform(inp) {
  let out = {}
  for (const inpKey in inp){
    for (let i=0;i<inp[inpKey].length;i++){
      out[`${inp[inpKey][i].toLowerCase()}`]=Number(`${inpKey}`)
    }
  }
  return out
};

let newPointStructure= transform(oldPointStructure)
//console.log(newPointStructure[])
// console.log(scrabbleScore(`car`))
console.log(scoringAlgorithms)
function runProgram() {
   initialPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
//No Gods No Masters
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

