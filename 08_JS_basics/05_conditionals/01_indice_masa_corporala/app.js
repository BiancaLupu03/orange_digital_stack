var inputInaltime = document.getElementById("inaltime");
var inputGreutate = document.getElementById("greutate");
var paragrafRezultat = document.getElementById("output");

function calculeazaIMC() {
    
    var inaltime = Number(inputInaltime.value);
    var greutate = Number(inputGreutate.value);
    var IMC = greutate / (inaltime**2);



    if (IMC < 18.5) {
        paragrafRezultat.innerHTML = "IMC-ul tău este " + IMC.toFixed(2) + "--" + " Risc pentru sănătate: ridicat Această valoare indică riscuri pentru sănătatea ta, este mult prea mică pentru o sănătate optimă.";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        paragrafRezultat.innerHTML =
          "IMC-ul tău este " +
          IMC.toFixed(2) +
          "--" +
          " Risc pentru sănătate: minim/scăzut";
    } else if (IMC >= 25 && IMC <= 29.9) {
        paragrafRezultat.innerHTML =
          "IMC-ul tău este " +
          IMC.toFixed(2) +
          "--" +
          " Risc pentru sănătate: scăzut/moderat";
    } else if (IMC >= 30 && IMC <= 34.9) {
        paragrafRezultat.innerHTML =
          "IMC-ul tău este " +
          IMC.toFixed(2) +
          "--" +
          " Risc pentru sănătate: moderat/ridicat Acesta e un semn de avertisment: schimbă-ți dieta acum!";
    }else {
        paragrafRezultat.innerHTML =
          "IMC-ul tău este " +
          IMC.toFixed(2) +
          "--" +
          " Risc pentru sănătate: ridicat Greutatea iți afectează în mod radical sănătatea. Scapă de surplusul de greutate!";
    }
 

    console.log(IMC);
}