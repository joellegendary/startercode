const friend = 'BRUTUS';
const shiftvalue = 3;

// 1. Write a function to encrypt one letter.
// 2. Get the position of the letter
// 3. Move 3 steps from the given letter
// 4. Get the postion of the decrypt letter
// 5. Use the position to obtain the letter.
function encrypt(letter, value) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const shift = (alphabets.indexOf(letter) + value) % alphabets.length;
  return alphabets[shift];
}

//1. Create a function
//2. Create a varibale for storing result
//3 Loop through letter of word
// 3.1 for each letter we encrypt.
// 3.1 store in the return variable
//4 return the encrypted value

function encryptMessage(word, value) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    const encryptValue = encrypt(word[i], value);
    result += encryptValue;
  }
  return result;
}
console.log(encrypt('w', 3));
// console.log(encryptMessage('brutus', 3));