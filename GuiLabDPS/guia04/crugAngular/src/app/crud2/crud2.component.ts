import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css']
})
export class Crud2Component implements OnInit {

  articulos;

  art;
  constructor(private articulosServicio: ArticulosService) { }

  ngOnInit() {
    this.articulos=null;
    this.recuperarTodos();
    this.art ={
      codigo:0,
      descripcion: null,
      precio: 0,
      proveedor: null, 
      fabricante:null
    };
  }

  recuperarTodos(){
    this.articulosServicio.recuperarTodos().subscribe(result=>this.articulos=result);
  }

  alta(){
    if (this.art.descripcion.trim()=="" || this.art.proveedor.trim()=="" || this.art.fabricante.trim()=="") {
      alert("revise que no haya datos vacios");
    } else {
    console.log("carga");
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if(datos['resultado']=='OK')
      {
        alert(datos['mensaje']);
        this.recuperarTodos();
        this.art ={
          codigo:0,
          descripcion: null,
          precio: 0,
          proveedor: null, 
          fabricante:null
        };
      }
    });
  }
  }

  baja(codigo){
    if(confirm('¿Esta seguro de eliminar el Registro')){
        this.articulosServicio.baja(codigo).subscribe(
          datos => {
            if(datos['resultado']=='OK')
            {
              alert(datos['mensaje']);
              this.recuperarTodos();
            }
          }
        )
    }
  }

  modificacion(){
    if (this.art.descripcion.trim()=="" || this.art.proveedor.trim()=="" || this.art.fabricante.trim()=="") {
      alert("revise que no haya datos vacios");
    } else {
    this.articulosServicio.modificacion(this.art).subscribe(
      datos=>{
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
          this.art ={
            codigo:0,
            descripcion: null,
            precio: 0,
            proveedor: null, 
            fabricante:null
          };
        }
      }
    )
    }
  }
  seleccionar(codigo) {
    this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result
    [0]);
    }


  hayRegistros() {
    if(this.articulos==""){
      return false
    }
    else
    {
    return true;
    }
  }




}
