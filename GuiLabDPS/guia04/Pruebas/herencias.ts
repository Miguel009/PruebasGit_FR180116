class Persona1 {
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number) {
    this.nombre = nombre;
    this.edad = edad;
    }

    imprimir() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    }
    }

    class Empleado extends Persona1 {
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number) {
    super(nombre, edad);
    this.sueldo = sueldo;
    }

    imprimir() {
    super.imprimir();
    console.log(`Sueldo: ${this.sueldo}`);
    }

    pagaImpuestos() {
    if (this.sueldo>5000)
    console.log(`${this.nombre} debe pagar impuestos`);
    else
    console.log(`${this.nombre} no debe pagar impuestos`);
    }
}

const person = new Persona1('Juan', 44);
person.imprimir();

const empleado1 = new Empleado ('Ana', 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuestos();


/*Abstracto */
abstract class Operacion2 {
    public valor1: number;
    public valor2: number;
    public resultado: number=0;
    
    constructor(v1:number, v2:number) {
    this.valor1=v1;
    this.valor2=v2;
    }
    abstract operar():void;

imprimir() {
console.log(`Resultado: ${this.resultado}`);
}

}
class Suma extends Operacion2 {
    constructor(v1:number, v2:number) {
    super(v1,v2);
    }
    
    operar() {
    this.resultado = this.valor1 + this.valor2;
    }
    }
    
    class Resta extends Operacion2 {
    constructor(v1:number, v2:number) {
    super(v1,v2);
    }
    
    operar() {
    this.resultado = this.valor1 - this.valor2;
    }
    }
    
    let suma1: Suma;
    suma1=new Suma(10, 4);
suma1.operar();
suma1.imprimir();

let resta1: Resta;
resta1=new Resta(10, 4);
resta1.operar();
resta1.imprimir();
