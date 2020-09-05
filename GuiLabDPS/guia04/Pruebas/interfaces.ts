interface Punto {
    imprimir(): void;
    }
    
    class PuntoPlano implements Punto{
    constructor(private x:number, private y:number) {}
    
    imprimir() {
    console.log(`Punto en el plano: (${this.x},${this.y})`);
    }
    }
    
    class PuntoEspacio implements Punto{
    constructor(private x:number, private y:number, private z:number) {}
    
    imprimir() {
    console.log(`Punto en el espacio: (${this.x},${this.y},${this.z})`);
    }
    }
    
    let puntoPlano1: PuntoPlano;
    puntoPlano1 = new PuntoPlano(10, 4);
    puntoPlano1.imprimir();

    let puntoEspacio1: PuntoEspacio;
puntoEspacio1 = new PuntoEspacio(20, 50, 60);
puntoEspacio1.imprimir();


interface Figura {
    superficie: number;
    perimetro: number;
    calcularSuperficie(): number;
    calcularPerimetro(): number;
    }
    
    class Cuadrado implements Figura {
    superficie: number;
    perimetro: number;
    constructor(private lado:number) {
    this.superficie = this.calcularSuperficie();
    this.perimetro = this.calcularPerimetro();
    }
    
    calcularSuperficie(): number {
    return this.lado * this.lado;
    }
    
    calcularPerimetro(): number {
    return this.lado * 4;
    }
    }

    class Rectangulo implements Figura {
        superficie: number;
        perimetro: number;
        constructor(private ladoMayor:number, private ladoMenor:number) {
        this.superficie = this.calcularSuperficie();
        this.perimetro = this.calcularPerimetro();
        }
        
        calcularSuperficie(): number {
        return this.ladoMayor * this.ladoMenor;
        }
        
        calcularPerimetro(): number {
        return (this.ladoMayor * 2) + (this.ladoMenor * 2);
        }
        }
        let cuadrado1: Cuadrado;
        cuadrado1 = new Cuadrado(10);
        console.log(`Perimetro del cuadrado : ${cuadrado1.calcularPerimetro()}`);
        console.log(`Superficie del cuadrado : ${cuadrado1.calcularSuperficie()}`);
        let rectangulo1: Rectangulo;
        rectangulo1 = new Rectangulo(10, 5);
        console.log(`Perimetro del rectangulo : ${rectangulo1.calcularPerimetro()}`);
        console.log(`Superficie del cuadrado : ${rectangulo1.calcularSuperficie()}`);

        interface Figura2 {
            superficie: number;
            perimetro: number;
            calcularSuperficie(): number;
            calcularPerimetro(): number;
            }
            
            class Cuadrado1 implements Figura {
            superficie: number;
            perimetro: number;
            constructor(private lado:number) {
            this.superficie = this.calcularSuperficie();
            this.perimetro = this.calcularPerimetro();
            }
            
            calcularSuperficie(): number {
            return this.lado * this.lado;
            }
            
            calcularPerimetro(): number {
            return this.lado * 4;
            }
            }
            
            class Rectangulo1 implements Figura {
            superficie: number;
            perimetro: number;
            constructor(private ladoMayor:number, private ladoMenor:number) {
                this.superficie = this.calcularSuperficie();
                this.perimetro = this.calcularPerimetro();
                }
                
                calcularSuperficie(): number {
                return this.ladoMayor * this.ladoMenor;
                }
                
                calcularPerimetro(): number {
                return (this.ladoMayor * 2) + (this.ladoMenor * 2);
                }
                }
                
                function imprimir(fig: Figura) {
                console.log(`Perimetro: ${fig.calcularPerimetro()}`);
                console.log(`Superficie: ${fig.calcularSuperficie()}`);
                }
                
                let cuadrado2: Cuadrado;
                cuadrado2 = new Cuadrado(10);
                console.log('Datos del cuadrado');
                imprimir(cuadrado1);
                let rectangulo2: Rectangulo;
                rectangulo2 = new Rectangulo(10, 5);
                console.log('Datos del rectángulo');
                imprimir(rectangulo2);

interface Punto10 {
x: number;
y: number;
}
let punto1:Punto10 = {x:10, y:20};
console.log(punto1);

interface Punto20 {
    x: number;
    y: number;
    z?: number;
    }
    
    let puntoPlano: Punto20 = {x:10, y:20};
    console.log(puntoPlano);
    let puntoEspacio: Punto20 = {x:10, y:20, z:70};
    console.log(puntoEspacio);

    interface Punto30 {
        x: number;
        y: number;
        }
        
        interface Punto3D extends Punto30 {
        z: number;
        }
        let punto20: Punto30 = {x:10, y:20};
        let punto2: Punto3D = {x:23, y:13, z:12};
        console.log(punto1);
        console.log(punto2);