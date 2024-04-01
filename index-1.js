function changeCase(string) {
    // Activate an empty string to store the result
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
  
  