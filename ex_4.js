/*Napisz funkcję „printVowels”, która przyjmuje jako argument ciąg znaków i wyświetla jedynie zawarte w nim samogłoski.
Samogłoski to „a”, „e”, „i”, „o”, „u”.
*/
/* Rozwiązanie */
function printVowels(chars) {
  let newWord = "";
  for (let i = 0; i < chars.length; i++) {
    let letter = chars[i];
    switch (chars[i]) {
      case "a":
        newWord += "a";
        break;
      case "e":
        newWord += "e";
        break;
      case "i":
        newWord += "i";
        break;
      case "o":
        newWord += "o";
        break;
      case "u":
        newWord += "u";
        break;
      default:
        break;
    }
  }
  console.log("Samogloski podanego wyrazu to: " + newWord);
  return newWord;
}

module.exports = printVowels;

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(printVowels("hello world"), "eoo");
verify(printVowels("kangaroo"), "aaoo");
verify(printVowels("cheeseburger"), "eeeue");
verify(printVowels("rhythm"), "");
