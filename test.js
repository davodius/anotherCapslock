/* const prompt = require("prompt-sync")();
let testText = prompt();
//testText = "banan";
console.log(testText);
 */
const prompt = require("prompt-sync")();

function alternateCase(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      result += text[i].toUpperCase();
    } else {
      result += text[i].toLowerCase();
    }
  }
  return result;
}

// usage of the finished product
const inputText = prompt();
const transformedText = alternateCase(inputText);
console.log(transformedText); // Outputs: "HeLlO WoRlD"
