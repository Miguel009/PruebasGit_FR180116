import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//  Service 
import { StudentsService } from '../../services/students.service';
import { AuthService } from "../../services/auth.service";
// Class
import { Students } from '../../models/students';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentlist:Students[];
  constructor(
    public studentService: StudentsService,
    public authService: AuthService
  ) { }

  ngOnInit():void {
    this.studentService.getStudents();
    this.resetForm();
    this.leer();
  }
  leer(){
    return this.studentService.getStudents().snapshotChanges().subscribe(items=>{
      this.studentlist = [];
      items.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.studentlist.push(x as Students);
      });
    });
  }
  onEdit(student:Students){
    this.studentService.selectedStudent = Object.assign({}, student)
  }

  onDelete($key:string){
    if (confirm('Are you sure you want to delete it')) {
      this.studentService.deleteStudent($key);
    }
  }
  onSubmit(productForm: NgForm){
    if (productForm.value.$key == null) {
      this.studentService.insertStudents(productForm.value);
    } else {
      this.studentService.updateStudents(productForm.value);
    }
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
      if (productForm != null) {
        productForm.reset();
        this.studentService.selectedStudent = new Students();
      }
  }

}
