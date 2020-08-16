var Persona = /** @class */ (function () {
    function Persona(_first_name, _last_name) {
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    Persona.prototype.hola = function () {
        console.log("Mando un saludo a :" + this.first_name + " " + this.last_name);
    };
    return Persona;
}());
var primerapersona = new Persona();
var segundapersona = new Persona("Jorge");
var tercerapersona = new Persona("Jorge", "Cano");
console.log("Tercera persona apelldio: " + tercerapersona.last_name);
console.log("segunda persona nombre: " + segundapersona.first_name);
console.log("Primera persona nombre: " + primerapersona.first_name);
tercerapersona.hola();
//Interpolacion
var a = "Uriel";
var b = "Saludos a ti " + a + ",";
console.log(b);
