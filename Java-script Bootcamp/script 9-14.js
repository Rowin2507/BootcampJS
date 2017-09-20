//Function declaration
functie1(); // Zegt "Hallo"
functie2(); // geeft naam + voornaam

function functie1() {
  console.log('Hallo');
}

function functie2() {
  var vn = "Rowin ";
  var an = "Schmidt";
  console.log(vn+an);
}


//Function expression
var leeftijd = function() {
  console.log(10+7);
}

var plaats = function() {
  console.log("Koog aan de Zaan");
}

leeftijd();
plaats();


//Anonymous functions
var anoniem1 = function() {
    console.log("Dit is blijkbaar anoniem");
}
var anoniem2 = function() {
    console.log("Dit is ook blijkbaar anoniem");
}


//Closures
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();
