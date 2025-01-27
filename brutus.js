function decryptMessage(alphabet, place) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    // Find the index of the given letter
    const currentPlace = letters.indexOf(alphabet.toLowerCase());

    // Handle case where letter is not found
    if (currentPlace === -1) {
        return "Invalid character!";
    }

    // Subtract the 'place' to decrypt and handle wrap-around
    const decryptedIndex = (currentPlace - place + 26) % 26;

    // Return the decrypted letter
    return letters[decryptedIndex];
}
function decryptMessage(alphabet, place) {
    const letter = "abcdefghijklmnopqrstuvwxyz";
    const currentIndex = letter.indexOf(alphabet.toLowerCase());

    if (currentIndex === -1) {
        return "Invalid character!";
    }

    const decryptedIndex = (currentIndex - place + 26) % 26;
    return letter[decryptedIndex];
}

function returnMessage(input) {
    const place = 3; // Example shift value
    const letter = "abcdefghijklmnopqrstuvwxyz";
    let result = ""


    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        // Apply the decryption function to each character
        const decryptedChar = decryptMessage(char, place);
        result += decryptedChar;
    }

    return result;
} console.log(returnMessage("alright")); 
