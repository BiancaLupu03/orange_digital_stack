// var(nu se mai foloseste), let, const

var a; //undefined
var b = 10;

console.log(a);
console.log(b);

a = 20;
console.log(a);

console.log(a, b);
console.log("b =", b);

// caractere permise - a-z, A-Z, $, _, 0-9 (nu poate incepe cu cifra)
// camelCase pt variabile si functii
// var user-name = "Bianca"; //nu e ok
var userName = "Bianca"; //ok
var numberOfLikes;
var password;
var user1;

//nume invalide pt variabile
// var 1nume;
// var nume-utilizator
// var function;  //cuv cheie din javascript + if, for, while.

//siruri de caractere - string
var nume = "Bianca"; //string literal
var mesaj = "Salut!"; //string literal
var varsta = 20; //number literal
var text1 = "Ma numesc" + " " + nume + " si am" + " " + varsta + " ani.";

console.log(text1);
console.log("ma numesc " + nume + " si am " + varsta + " ani."); //nu e recomandat

var text2 = 20 + 40 + 40 + "20" + 40 + 40;
// cand apare un string intr-o opratie, totul devine string
//doar "plus" este si la string si la numere
//devine string doar ce este in dreapta lui, ce este inainte se va aduna normal
console.log(text2); // "da stringul 2020 - e cu negru", number e cu albastru
console.log(Number(text2)); // conversie explicita la number

//number
var intreg = 20;
var zecimal = 3.14;
var notatieExponentiala = 2e3; // 2*10^3 = 2000
console.log(notatieExponentiala);

var hexaNumber = 0xff; //255
console.log(hexaNumber);
var binarNumber = 0b1010; //10
console.log(binarNumber);

//valori speciale pt number
console.log(1 / 0); //Infinity
console.log(-1 / 0); //-Infinity
//NaN - not a number
var n = "x";
console.log(Number(n));
console.log(isNaN('x')); //true
console.log(isNaN(10)); //false

//boolean - adevarat sau fals, valori de adevar
var esteCeata = true;
var amBani = false;
var comparatie = 2<3; //true
console.log(esteCeata, amBani, comparatie);

//Operatori
//operatori aritmetici + - * / % (restul impartirii-modulul) **
var x = 5;
var y = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); 
console.log(x%2, y%2); //restul impartirii la 2 
var estePar = x % 2 == 0;
console.log(estePar); //false

// false = esteCeata; //eroare, mereu variabila sta in stanga

// incrementare/decrementare
x++; //x = x + 1;
console.log(x);
y--; //y = y - 1;
y--; //8
console.log(y);

//x++ identic cu x=x+1 si cu x+=1
x+=10; //mareste x cu 10
console.log(x);
x*=3;
console.log(x);
x%= 2;
console.log(x); //1

//Operatori de comparare
// <, >, <=, >=, ==(egal), === (strict egal), != (diferit de egal), !== (diferit strict de egal)

console.loglog(x,y);
console.log(x < y); //true
console.log(x > y); //false
console.log(x == '1'); //true -verifica doar valoarea
console.log(x === '1'); //false -verifica si tipul - x e number, '1' e string

console.log(x != '1'); //false
console.log(x !== '1'); //true

//Operatori logici - AND (si) - &&, OR (sau) - ||, NOT (negare) - !
var amRca = true;
var amRovinieta = false;
var potCirculaPeDrumNational = amRca ==true && amRovinieta == true;

var amCard = true;
var amCash = false;
var potPlati = amCard || amCash;

//operator typeOf
console.log(typeof 10); //number
console.log(typeof "10"); //string
console.log (typeOf (2<3)); //boolean
console.log(typeof (10+"20")); //string
var numeDeFamilie;
console.log(typeof numeDeFamilie); //undefined

//operator ternar - conditie ? expr1 : expr2

var varsta = 28;
var poateConduce = varsta >= 18 ? "DA" : "NU";
console.log(poateConduce);

var formaDeSalut = varsta < 40 ? 'buna' : 'bună ziua';

var ora = 11;
var formaDeSalut2 = 
(ora >= 8 && ora< 12) 
   ? 'buna dimineata' 
   : (ora >= 12 && ora < 19) 
   ? 'Buna ziua' 
   : 'buna seara';
console.log(formaDeSalut2);

