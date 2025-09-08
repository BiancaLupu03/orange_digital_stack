//if(conditie) {
// cod care se executa daca conditia este adevarata
//}

//while(conditie) {
// cod care se executa atata timp cat conditia este adevarata
//}

//var start = 3;
//var end = 77;
//var currentNumber = start;
//while (currentNumber <= end) {
//  console.log(currentNumber);
//currentNumber++;
//}

while (true) {
  var zar1 = parseInt(Math.random() * 6);
  var zar2 = parseInt(Math.random() * 6);
  console.log(zar1, ' ', zar2);
  incercari++;
  if (zar1 == 6 && zar2 == 6) {
    console / log("am avut nevoie de " + incercari + " incercari sa dau 6 6");
    break;
  }
}

//for(initializare; conditie; pas) {
// cod care se executa atata timp cat conditia este adevarata
// initializare - se executa o singura data, la inceputul buclei
// pas - se executa la fiecare iteratie, dupa codul din bucla
//}


var elem = ["mere", "jucarii", "servetele", "camera foto"];
//parcurgere array
for (var i = 0; i <= elem.length - 1; i++) {
  console.log(elem[i]);
}

