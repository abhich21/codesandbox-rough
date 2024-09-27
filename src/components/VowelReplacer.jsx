import React, { useState } from "react";

const VowelReplacer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    // Get the input value
    const value = e.target.value;

    // Replace vowels with #
    const replacedValue = value.replace(/[aeiouAEIOU]/g, "#");

    // Update state with the replaced value
    setInputValue(replacedValue);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Vowel Replacer</h3>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
        value={inputValue}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p>
        Output: <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default VowelReplacer;
