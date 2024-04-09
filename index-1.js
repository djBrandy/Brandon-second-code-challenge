 // Function to convert case
function changeCase(string) {
  // Activate an empty string to store the result, and also declare the variable changed that it should only receive string data type.
  let changed = '';

  // Iterate over each character in the input string
  for (let i = 0; i < string.length; i++) {
      // Check if the character is uppercase
      if (string[i] === string[i].toUpperCase()) {
          // If in uppercase then convert it to lowercase and add to the result
          changed += string[i].toLowerCase();
      } else {
          // If in lowercase then convert it to uppercase and add to the result
          changed += string[i].toUpperCase();
      }
  }

  // Return the final changed string
  return changed;
}

// Function to convert case and display result in a window alert
function convertCaseAndAlert() {
  // Get the input value
  const inputText = document.getElementById("textInput").value;
  
  // Call the function to convert case
  const result = changeCase(inputText);

  // Show the result in a window alert
  alert("Converted text: " + result);
}

// Add event listener to the convert button
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertCaseAndAlert);

  
