//obiect literal

var masina = {
    marca: "Skoda",
    model: "Octavia",
    anFabricatie: 2007,
    kmParcursi: 200109,
};

// type masina = {
//     marca: string,
//     model: string,
//     anFabricatie: number,
//     kmParcursi: number,
// };  //tipizare in TS - nu se transpune in JS ?? 

var input = {
    type: "text",
    value: 'Ana are mere',

}

function Apasa() {
  let valoare = document.getElementById("my-input").value;
  alert("Ai scris: " + valoare);
}
function showInputValue () { 
    var myInput = document.getElementById("myInput");
    //console.log(myInput);
    console.log(myInput.value);
    //console.log(myInput.type);
    //console.log(myInput.id);
}

function  calculeazaSuma () {
    var primulNumar = Number( document.getElementById("first-number").value);
    var alDoileaNumar = Number(document.getElementById("second-number").value);

    var suma = primulNumar + alDoileaNumar;
    document.getElementById('output').innerHTML = 'suma dintre' + primulNumar + ' si ' + alDoileaNumar + ' este ' + suma;
    //console.log (primulNumar + alDoileaNumar); 
}