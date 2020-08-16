class Calculadora {
    numero1:number;
    numero2:number;
    constructor(num1:number, num2:number) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    OperacionesBasicas(op:number):number{
        var operecaion:number;
        switch (op) {
            case 1:
                operecaion = this.numero1+this.numero2;
                break;
            case 2:
                operecaion = this.numero1-this.numero2;
                break;
            case 3:
                operecaion = this.numero1*this.numero2;
                break;
            case 4:
                operecaion = this.numero1/this.numero2;
                break;
            default:
                console.log("Opcion equivocada");
                break;
        }
        return operecaion;
    }
}

var numeros = new Calculadora(10, 15);

console.log(`La respues de la operacion ${numeros.numero1} + ${numeros.numero2} es ${numeros.OperacionesBasicas(1)}`);
console.log(`La respues de la operacion ${numeros.numero1} - ${numeros.numero2} es ${numeros.OperacionesBasicas(2)}`);
console.log(`La respues de la operacion ${numeros.numero1} * ${numeros.numero2} es ${numeros.OperacionesBasicas(3)}`);
console.log(`La respues de la operacion ${numeros.numero1} / ${numeros.numero2} es ${numeros.OperacionesBasicas(4)}`);