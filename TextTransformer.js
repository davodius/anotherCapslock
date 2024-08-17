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

// Function to handle the button click
function transformText() {
  // Get the input value
  const inputText = document.getElementById("inputText").value;

  // Transform the text
  const transformedText = alternateCase(inputText);

  // Display the result
  document.getElementById("output").textContent = transformedText;
}
