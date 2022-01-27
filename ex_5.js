/* Ćwiczenie 5 
Napisz funkcję „abbrev”, która przyjmuje jako argument ciąg znaków i zwraca jego skróconą wersję.
Skrót składa się z pierwszych 3 znaków ciągu, spacji i łącznej liczby znaków w ciągu.
Jeśli ciąg ma mniej niż 3 znaki, skrót zostaje wypełniony spacjami. (Przyjrzyj się przykładom!)
*/
  
/* Rozwiązanie */

function abbrev(){

}

module.exports = abbrev;

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(abbrev("Nice"), 'Nic 4');
  verify(abbrev("I am your father"),'I a 16');
  verify(abbrev("Supercalifragilisticexpialidocious"),'Sup 34');
  verify(abbrev("!"),'!   1');
  verify(abbrev("Yo"),'Yo  2');
  