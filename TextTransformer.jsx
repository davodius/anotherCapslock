import React, { useState } from "react";

const TextTransformer = () => {
  const [inputText, setInputText] = useState("");
  const [transformedText, setTransformedText] = useState("");

  // Function to handle text input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to transform text (capitalize every other letter)
  const transformText = (text) => {
    let transformed = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 1) {
        transformed += text[i].toUpperCase(); // Capitalize every other letter
      } else {
        transformed += text[i].toLowerCase(); // Keep other letters as lowercase
      }
    }
    return transformed;
  };

  // Function to handle form submit (optional)
  const handleSubmit = (event) => {
    event.preventDefault();
    const transformed = transformText(inputText);
    setTransformedText(transformed);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Transform</button>
      </form>
      <div>
        <h3>Transformed Text:</h3>
        <p>{transformedText}</p>
      </div>
    </div>
  );
};

export default TextTransformer;
