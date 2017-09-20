var string1 = "Ford";
var string2 = "Skoda";
var string3 = "Toyota";
var string4 = "BMW";
var string5 = "Jaguar";
var string6 = "Aston Martin";
var string7 = "Mercedes";
var string8 = "Volkswagen";
var string9 = "Porsche";
var string10 = "Bugatti";

var nr1 = 1;
var nr2 = 2;
var nr3 = 3;
var nr4 = 4;
var nr5 = 5;

var boolean1 = true;
var boolean2 = false;
var boolean3 = true;
var boolean4 = false;
var boolean5 = false;


//Introspection
var nr=5;
var str="5";

console.log(nr+str);
//dit geeft in php 10
//in javascript  "55"

console.log("nr="+typeof( nr) ) ; //Number
console.log("nr="+typeof( str) ) ; //String


//Coercion
console.log(nr1+string1);
console.log(nr+boolean1);
console.log(string2+boolean2);

console.log(nr3+1200);
console.log(1200+nr);
