var palindromeWord = prompt("Write Palindrome word");
if (palindromeWord === palindromeWord.split("").reverse().join("")) {
  alert(palindromeWord + " is a palindrome word.");
} else {
  alert(palindromeWord + " is not a palindrome word.");
}
