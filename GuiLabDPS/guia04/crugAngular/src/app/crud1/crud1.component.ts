import { Component, OnInit } from '@angular/core';
import {Alumno} from '../models/alumno'

@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component implements OnInit {

  selectedAlumno:Alumno;
  constructor() { }
  alumnoArray: Alumno[];
  ngOnInit(): void {
    this.alumnoArray=[
      {id:1, name:"Alex", lastname:"Campos", age:35, address: "su casa", phone:"78774628", email:"coreeo@correo.com"},
      {id:2, name:"Maria", lastname:"Lopez", age:20, address:"su cada", phone:"78774628", email:"correo@maicho.com"},
      {id:3, name:"Juan", lastname:"Castro", age:25, address: "su casa", phone:"78774628", email:"coreeo@correo.com"}
    ]
    this.selectedAlumno = {id:0, name:'', lastname:'', age:0, address: "", phone:"", email:""}
  }
  openForEdit(alumno:Alumno):void{
      this.selectedAlumno=alumno;
  }

  addOrEdit():void{
    if (this.selectedAlumno.id==0) {
      this.selectedAlumno.id=this.alumnoArray.length+1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = {id:0, name:'', lastname:'', age:0, address: "", phone:"", email:""}
  }

  delete():void{
    if (confirm('¿Esta seguro de eliminar el Registro?')) {
      this.alumnoArray=this.alumnoArray.filter(x=>x!=this.selectedAlumno);
      this.selectedAlumno = {id:0, name:'', lastname:'', age:0, address: "", phone:"", email:""}
    }
  }

}
