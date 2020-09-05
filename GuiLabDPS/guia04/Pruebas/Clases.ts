class Persona{
    nombre:string;
    edad: number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
        
    imprimir(){
        console.log(`nombre ${this.nombre} y edad ${this.edad}`);
    }
}


let persona1: Persona;

persona1=new Persona('Juan', 45);

persona1.imprimir();

class Dado{
    private valor:number;

    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public tirar(){
        this.generar();
        this.imprimir();
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();

class Perso{
    constructor(public nombre:string, public edad:number){
    }
    imprimir(){
        console.log(`nombre ${this.nombre} y edad ${this.edad}`);
    }
}

let persona2: Perso;

persona1=new Perso('Juan', 45);

persona1.imprimir();

class Articulo{
    readonly codigo:number;
    descripcion:string;
    precio:number;

    constructor(codigo:number, descripcion:string, precio:number)
    {
        this.codigo = codigo;
        this.descripcion=descripcion;
        this.precio=precio;
    }

    imprimir(){
        console.log(`Codigo ${this.codigo} Descripcion ${this.descripcion} Precio: ${this.precio}`);

    }
}


let articulo1:Articulo;
articulo1 = new Articulo(1, 'papas', 12.5);

articulo1.imprimir();

/**---------------PROPIEDADES ESTATICAS----------------------*/
class Dado1 {
    private valor: number;
    static tiradas:number=0;
    tirar() {
    this.generar();
    }
    private generar() {
    this.valor = Math.floor(Math.random() * 6) + 1 ;
    Dado1.tiradas++;
    }
    
    imprimir() {
    console.log(`Salió el valor ${this.valor}`);
    }
}

let dado0=new Dado1();
dado0.tirar();
dado0.imprimir();
let dado2=new Dado1();
dado2.tirar();
dado2.imprimir();
console.log(`Cantidad de tiradas de dados:${Dado1.tiradas}`);


/*Metodos estaticos */
class Matematica {
    
    static mayor(v1:number, v2: number): number {
    if (v1>v2)
    return v1;
    else
    return v2;
    }
    
    static menor(v1:number, v2: number): number {
    if (v1<v2)
    return v1;
    else
    return v2;
    }
    
    static aleatorio(inicio: number, fin: number): number {
    return Math.floor((Math.random()*(fin+1-inicio))+inicio);
    }
    }
    let x1=Matematica.aleatorio(1,10);
    let x2=Matematica.aleatorio(1,10);
    console.log(`El mayor entre ${x1} y ${x2} es ${Matematica.mayor(x1,x2)}
    `);
    console.log(`El menor entre ${x1} y ${x2} es ${Matematica.menor(x1,x2)}`);

