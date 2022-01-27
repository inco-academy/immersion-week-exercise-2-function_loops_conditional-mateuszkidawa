/*
Zapewne znasz grę w „kamień, papier i nożyce” (jeśli nie, zapoznaj się z zasadami i rozegraj parę rudek z osobą obok!).
Napisz funkcję, która zwraca wynik gry.
Funkcja „rockPaperScissors” przyjmuje dwa argumenty:
- pierwszym jest ruch pierwszego gracza: „rock”, „paper” lub „scissors”’;
- drugim jest ruch drugiego gracza: „rock”, „paper” lub „scissors”’.
Twoja funkcja zwraca „First player wins”, jeśli pierwszy gracz wygrał, „Second player wins”, jeśli drugi gracz wygrał, a „Draw” w przypadku remisu.
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
  
  verify(rockPaperScissors('rock', 'rock'), 'Draw');
  verify(rockPaperScissors('rock', 'paper'),'Second player wins');
  verify(rockPaperScissors('rock', 'scissors'),'First player wins');
  verify(rockPaperScissors('paper', 'scissors'),'Second player wins');