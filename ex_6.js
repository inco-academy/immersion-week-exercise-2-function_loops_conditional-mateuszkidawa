/* Ćwiczenie 6
 Napisz funkcję „pyramid”, która przyjmuje jako argument wielkość podstawy i rysuje piramidę składającą się ze znaków „#”.
*/

/* Przypadek testowy:

Test:   pyramid(9)
Wynik:

 ``` #
    ###
   #####
  #######
 #########
 ```
Test: pyramid(1)
Wynik:
```#
```
Test: pyramid(5)
```#
  ###
 #####
```
*/

/* Rozwiązanie */
function pyramid(base) {
  // if (base === 1) {
  //   console.log("```#");
  //   console.log("``");
  // } else if (base === 2) {
  //   console.log("``#");
  //   console.log("`##");
  //   console.log("``");
  // } else if (base === 3) {
  //   console.log("````#");
  //   console.log("```##");
  //   console.log("  ###");
  //   console.log("````");
  // } else if (base === 4) {
  //   console.log("````#");
  //   console.log("   ##");
  //   console.log("  ###");
  //   console.log(" ####");
  //   console.log("````");
  // } else if (base === 5) {
  //   console.log("``#");
  //   console.log(" ###");
  //   console.log("#####");
  //   console.log("``");
  // }

  let element = "";
  for (let i = 1; i <= base; i++) {
    // for (let j = base; j > 0; j--) {
      element += "#";
      console.log(element);
    // }
  }
  console.log("");
}

pyramid(1);
pyramid(2);
pyramid(3);
pyramid(4);
pyramid(9);
