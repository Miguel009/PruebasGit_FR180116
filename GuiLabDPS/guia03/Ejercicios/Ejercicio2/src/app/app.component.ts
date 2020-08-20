import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Ejercicio2';
  gaso = ["Regular", "Especial", "Diesel"];
  opcionSeleccionado="Regular";
  valorgas=0.05;
  valorconversion:number;

  capturar(){
    if (this.valorgas>150) {
      this.valorconversion=150;
      this.valorgas=150;
    }
    else if (this.valorgas<0.05){
      this.valorconversion=0.05;
      this.valorgas=0.05;
    }
    else if ((this.valorgas*(100/5))%1!=0){
      this.valorconversion=0.05;
      this.valorgas=0.05;
    }
    
    switch (this.opcionSeleccionado) {
      case 'Regular':
        this.valorconversion=Math.round(this.valorgas*4.25*100)/100 ;
        break;
      case 'Especial':
        this.valorconversion=Math.round(this.valorgas*4.05*100)/100;
        break;
      case 'Diesel':
        this.valorconversion = Math.round(this.valorgas*3.96*100)/100;    
        break;
      default:
        break;
    }
}
}
