import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';
  sueldobruto:number;
  sueldoneto:number;
  isss:number;
  afp:number;
  renta:number;
  visita=true;
  suma(sueldo:number){
    if (this.sueldobruto<=0) {
      this.sueldobruto=-1;
    }
    else
    {
    this.sueldobruto=Math.round(this.sueldobruto*100)/100;
    this.isss=Math.round(sueldo*0.073*100)/100;
    this.afp=Math.round(sueldo*0.051*100)/100;
    this.renta=Math.round(sueldo*0.11*100)/100;
    this.sueldoneto=Math.round((sueldo-this.isss-this.afp-this.renta)*100)/100;
    this.visita=false;
    }
  }
  cambio(){
    this.visita=true;
  }
}
