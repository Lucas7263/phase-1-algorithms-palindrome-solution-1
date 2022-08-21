function reverse(word) {
  // const wordArray = word.split("")
  // const reverseWordArray = wordArray.reverse()
  // const reverseWord = reverseWordArray.join("")
  //   return reverseWord; 

    return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverse(word);
      return word === reverseWord;
 }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("flolf"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("gololgoglolog"))


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("pneumonoultramicroscopicsilicovolcanoconiosis"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("poster"));
}

module.exports = isPalindrome;
