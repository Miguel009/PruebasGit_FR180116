//Funcion primaria
function hello() {
    console.log("Muestro un mensaje de bienvenida, hola UwU");
}
console.log(hello());
//funcione con parametros
function setName(name) {
    console.log("Muestro un mensaje de bienvenida, hola " + name + " UwU");
}
console.log(setName("Miguel"));
//funcion con funcion de return
function setname(name, surName) {
    return "Muestro un mensaje de bienvenida, hola " + name + " " + surName + " UwU";
}
console.log(setname("miguel", "ss"));
//variables internas
function Setname(name) {
    var variableInterna = "Uriel";
    return "Hola " + name;
}
//console.log("Hola "+variableInterna); da un error
console.log(Setname("Miguel"));
//Variable Externa
var variableExterna = "Uriel";
function SetName(name) {
    return "Hola " + name;
}
console.log("Hola " + variableExterna);
