class Persona{
    first_name:string;
    last_name:string;
    constructor(_first_name?:string, _last_name?:string){
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    public hola() {
        console.log("Mando un saludo a :" +this.first_name+ " "+this.last_name);
    }
}

let primerapersona = new Persona();
let segundapersona = new Persona("Jorge");
let tercerapersona = new Persona("Jorge", "Cano");

console.log("Tercera persona apelldio: "+tercerapersona.last_name);
console.log("segunda persona nombre: "+segundapersona.first_name);
console.log("Primera persona nombre: "+primerapersona.first_name);

tercerapersona.hola();