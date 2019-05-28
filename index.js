function palindrome(string) {
  function removeCharactersFromSentence(sentence) {
    let regex = /[a-z0-9]/gi;
    let result = sentence.match(regex);
    return result;
  }

  let characterFreeArray = removeCharactersFromSentence(string);
  return (
    characterFreeArray.join("").toLowerCase() ===
    characterFreeArray
      .reverse("")
      .join("")
      .toLowerCase()
  );
}

console.log(palindrome("racer")); // false

console.log(palindrome("racecar")); // true
