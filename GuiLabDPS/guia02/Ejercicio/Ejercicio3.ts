class Empleado {
    nombre:string;
    salario:number;
    constructor(name:string, sala:number) {
        this.nombre=name;
        this.salario=sala;
    }
    deducionsal():number{
        var bruto:number=0;
        bruto = this.salario-(this.salario*0.0725)-(this.salario*0.03)-(this.salario*0.04053)
        return bruto;
    }
}


var emple = new Empleado("Miguel", 600);

console.log(`Empleado ${emple.nombre} su salario neto son $${emple.salario}
                ya con impuesto es : $${Math.round(emple.deducionsal()*100)/100}`);