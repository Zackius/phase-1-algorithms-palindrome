function reverse(word) {
  let wordArray = word.split("");
  let reverseWArray = wordArray.reverse();
  let reverseWord = reverseWArray.join("");

  return reverseWord;
}
function isPalindrome(word) {
  const reversedWord = reverse(word);
  if (word === reversedWord) {
    return "True";
  } else {
    return "False";
  }
}

/* 
  Add your pseudocode here
  //find the length of the string
  //using for loop, loop through half of the string
      //check if word is a paalindrome or not by checking the first half over the last half
      //Console the output of the for loop

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
