//Funcion primaria
function hello():void{
    console.log("Muestro un mensaje de bienvenida, hola UwU");
}
console.log(hello());

//funcione con parametros
function setName(name:string):void{
    console.log("Muestro un mensaje de bienvenida, hola "+name+" UwU");
}
console.log(setName("Miguel"));

//funcion con funcion de return
function setname(name:string, surName:string):string{

    return "Muestro un mensaje de bienvenida, hola "+name+" "+surName+ " UwU";
}

console.log(setname("miguel", "ss"));

//variables internas
function Setname(name:string):string{
    var variableInterna:string = "Uriel";
    return "Hola "+name;
}

//console.log("Hola "+variableInterna); da un error

console.log(Setname("Miguel"));

//Variable Externa

var variableExterna:string = "Uriel";
function SetName(name:string):string{
    return "Hola "+name;
}

console.log("Hola "+variableExterna);