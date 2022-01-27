
/*Zmodyfikuj funkcję „rockPaperScissors” tak, aby *zwracała* rezultat zamiast go *wyświetlać*.
Zmień także funkcję tak, aby obsługiwała błędy. Jeśli jeden z przekazanych funkcji argumentów nie ma wartości „'rock'”, „'paper'” lub „'scissors'”, funkcja zwraca komunikat „Argument error”.
*/

/* Rozwiązanie */

function rockPaperScissors(){

}


module.exports = rockPaperScissors;

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(rockPaperScissors('paper', 'scissors'), 'Second player wins');
  verify(rockPaperScissors('rock', 'potatoes'),'Argument error');
  verify(rockPaperScissors('glue', 'scissors'),'Argument error');
  verify(rockPaperScissors('rock', 'rock'),'Draw');
