var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var full_nombre = "Jorge cano";
var age = 27;
var developer = true;
console.log("Bienvenido " + full_nombre + " de " + age + " de edad siendo un " + developer + " Developer");
console.log("Mi Mensaje");
var skill = ['Javascript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
console.log("todos: " + skill);
console.log("1: " + skill[0]);
console.log("2: " + skill[1]);
console.log("3: " + skill[2]);
console.log("------------------------------------------------");
console.log("todos los numeros: " + numberArray);
console.log("1: " + numberArray[0]);
console.log("2: " + numberArray[1]);
console.log("3: " + numberArray[2]);
console.log("3: " + numberArray[3]);
var ROLE;
(function (ROLE) {
    ROLE[ROLE["employee"] = 0] = "employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["admin"] = 2] = "admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
;
var role = ROLE.Developer;
console.log("------------------------------------------------");
console.log("role:" + role);
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
var Persona = /** @class */ (function () {
    function Persona(_first_name, _last_name) {
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    Persona.prototype.hola = function () {
        console.log("Mando un saludo a :" + this.first_name + " " + this.last_name);
    };
    //INTERPOLACION
    Persona.prototype.getSaludo = function () {
        var emojis = 'UwU';
        return "Saludos\n        " + this.last_name + ", " + this.first_name + "\n        le enviamos un saludo desde la consola!\n        " + emojis;
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
var a = "Uriel";
var b = "Saludos a ti " + this.a + ",";
console.log(b);
console.log(tercerapersona.getSaludo());
var pesonaUno = {
    first_name: "Jorge",
    last_name: "Cano",
    twitter_account: '@jorgecano'
};
console.log(pesonaUno);
//SHAPES
var Person = /** @class */ (function () {
    function Person() {
        this.first_name = "Jor";
        this.last_name = "Ca";
        this.twitter_user = "@jorgecuano";
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");
console.log(myPerson);
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hey " + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
//# sourceMappingURL=tsc.js.map