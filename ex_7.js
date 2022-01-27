/* Ćwiczenie 7
Napisz funkcję „subDigits”, która jako argument przyjmuje liczbę całkowitą i zwraca wynik, który jest wprowadzoną liczbą po odjęciu od niej wartości jej cyfr.
Na przykład: jeśli liczbą jest 12, funkcja zwraca  12 - 1 - 2 => 9.
Jeśli liczba jest ujemna, funkcja zwraca komunikat „Argument Error”.
*/
 

/* Rozwiązanie */


/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(subDigits(12), 9);
  verify(subDigits(4000000),3999996);
  verify(subDigits(0),0);
  verify(subDigits(451), 441);
  verify(subDigits(-12), 'Argument Error');
  