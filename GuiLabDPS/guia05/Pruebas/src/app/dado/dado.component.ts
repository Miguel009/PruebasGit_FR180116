import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';

@Component({
  selector: 'juego-dado',
  templateUrl: './dado.component.html',
  styles: []
})
export class DadoComponent implements OnInit {

  constructor() { }
  estado=true;
  personas: Persona[] = [
    new Persona('juan', 33),
    new Persona('ana', 15),
    new Persona('luis', 56),
    new Persona('carla', 45)
    ];
  arreglo1 =[10,20, 30, 40, 50];
  rastrearPor(indice: number, elemento: number) {
    console.log(indice, elemento);
  }
  alerta=true;
  ngOnInit(): void {
    this.arreglo1;
    this.alerta;
    this.personas;
    this.valor1=0;
    this.valor2=0;
  }
edad=43;
  mayorEdad(): boolean {
    if (this.edad >= 18)
    return true;
    else
    return false;
    }

    valor1: number;
    valor2: number;
    operacion: string = "ninguna";
    resultado: number;
}

class Persona {
  constructor(public nombre: string, public edad: number) { }
  }
