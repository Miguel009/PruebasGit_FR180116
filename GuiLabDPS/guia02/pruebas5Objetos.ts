class Persona{
    first_name:string;
    last_name:string;
    constructor(_first_name?:string, _last_name?:string){
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    public hola():void {
        console.log("Mando un saludo a :" +this.first_name+ " "+this.last_name);
    }
    //INTERPOLACION
    getSaludo():string{
        let emojis = 'UwU';
        return `Saludos
        ${this.last_name}, ${this.first_name}
        le enviamos un saludo desde la consola!
        ${emojis}`
    }
}

let primerapersona = new Persona();
let segundapersona = new Persona("Jorge");
let tercerapersona = new Persona("Jorge", "Cano");

console.log("Tercera persona apelldio: "+tercerapersona.last_name);
console.log("segunda persona nombre: "+segundapersona.first_name);
console.log("Primera persona nombre: "+primerapersona.first_name);

tercerapersona.hola();


var a:string = "Uriel";
var b = `Saludos a ti ${this.a},`;

console.log(b);

console.log(tercerapersona.getSaludo());
//INTERFASES
interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let pesonaUno:MyPersona ={
    first_name: "Jorge",
    last_name:"Cano",
    twitter_account:'@jorgecano'
}
console.log(pesonaUno);
//SHAPES
class Person{
    first_name:string;
    last_name:string;
    twitter_user:string;

    constructor(){
        this.first_name = "Jor";
        this.last_name = "Ca";
        this.twitter_user = "@jorgecuano"
    }

    setLastName(last_name:string){
        this.last_name = last_name;
    }
}

var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");
console.log(myPerson);

class Greeter {
    greeting:string;
    constructor(message:string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet(){
        return "hey "+this.greeting;
    }
}
function enumerable(value:boolean) {
    return function (target:any, propertyKey:string, descriptor:PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

let gree = new Greeter("Soy el mensaje");

console.log(gree.greet());