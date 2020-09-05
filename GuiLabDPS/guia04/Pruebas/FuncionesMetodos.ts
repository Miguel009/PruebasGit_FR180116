function sumar(valor1:number, valor2:number): number {
    return valor1+valor2;
    }
    
    console.log(sumar(10, 5));
    /*console.log(sumar('juan', 'carlos'));*/

    /*Funciones Anonimas */


    const funcSumar = function (valor1:number, valor2:number):number{
        return valor1+valor2;
    }

    console.log(funcSumar(4, 9));

    /*Parametrosd opcionales */
    function sumar2(valor1:number, valor2:number, valor3?:number):number {
        if (valor3)
        return valor1+valor2+valor3;
        else
        return valor1+valor2;
    }
    console.log(sumar2(5,4));
    console.log(sumar2(5,4,3));

    /*PARAMETROS POR DEFECTO*/

    function sumar3(valor1:number, valor2:number, valor3:number=0):number{
        return valor1+valor2+valor3;
    }

    console.log(sumar3(5,4));
    console.log(sumar3(5,4,3));

    /*rest*/ 
    function sumar4(...valores:number[]) {
        let suma=0;
        for(let x=0;x<valores.length;x++)
        suma+=valores[x];
        return suma;
        }
        
        console.log(sumar4(10, 2, 44, 3));
        console.log(sumar4(1, 2));
        console.log(sumar4());
        /*OPERADOR SPREAD. */

        function sumar5(...valores:number[]) {
            let suma=0;
            for(let x=0;x<valores.length;x++)
            suma+=valores[x];
            return suma;
            }
        const vec:number[]=[10,20,30];
        const s=sumar5(...vec);
        console.log(s);

/*funciones callback */

function operar(valor1: number, valor2: number, func: (x: number, y:number)=>number): number {
    return func(valor1, valor2);
    }
    
    console.log(operar(3, 7, (x: number,y: number): number => {
    return x+y;
    }))
    
    console.log(operar(3, 7, (x: number,y: number): number => {
    return x-y;
    }))
    
    console.log(operar(3, 7, (x: number,y: number): number => {
    return x*y;
    }))




type Operacion=(x: number, y:number)=>number;

function operar2(valor1: number, valor2: number, func: Operacion): number {
return func(valor1, valor2);
}

console.log(operar2(3, 7, (x: number,y: number): number => {
return x+y;
}))

console.log(operar2(3, 7, (x: number,y: number): number => {
return x-y;
}))

console.log(operar2(3, 7, (x: number,y: number): number => {
return x*y;
}))

/*Parametros de tipo union */
let edad: number | string;
edad=34;
console.log(edad);
edad='20 años';
console.log(edad);


function sumar6(valor1: number | string, valor2: number | string ): number | string {
    if (typeof valor1 ==='number' && typeof valor2 ==='number')
    return valor1+valor2;
    else
    return valor1.toString() + valor2.toString();
    }
    
    console.log(sumar6(4, 5));
    console.log(sumar6('Hola ', 2));
    console.log(sumar6('Hola ', 'Mundo'));
    
/* Acotaciones */
class Operacion1 {
    sumar(...valores:number[]) {
    let suma=0;
    for(let x=0;x<valores.length;x++)
    suma+=valores[x];
    return suma;
    }
    }
    
    let op: Operacion1;
    op=new Operacion1();
    console.log(op.sumar(1,2,3));