// npm install prompt-sync - to use the terminal prompts
// let userInputText = "hello world";
//

// create empty string and looping through the string
// if the index is even or zero it gets saved as uppercase to result
// else it gets saved as a lower case to result
function alternateCase(userInputText) {
  let result = "";
  for (let i = 0; i < userInputText.length; i++) {
    if (i % 2 === 0) {
      result += userInputText[i].toUpperCase();
    } else {
      result += userInputText[i].toLowerCase();
    }
  }
  return result;
}

const prompt = require("prompt-sync")();
const inputText = prompt();
const transformedText = alternateCase(inputText);
console.log(transformedText); // Outputs: "HeLlO WoRlD"

// usage of the finished product  ↓
// reads input Text
// Call alternateCase with the user input and store the result in transformedText
