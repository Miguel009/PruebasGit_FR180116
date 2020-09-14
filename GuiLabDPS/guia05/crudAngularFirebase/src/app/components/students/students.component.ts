import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { StudentsService } from '../../services/students.service';
// Class
import { Students } from '../../models/students';
// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentlist:Students[];
  constructor(
    public studentService: StudentsService,
    public toastr:ToastrService
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
      this.toastr.warning('Deleted Successfulyy', 'sTUDENT Removed');
    }
  }
  onSubmit(productForm: NgForm){
    if (productForm.value.$key == null) {
      this.studentService.insertStudents(productForm.value);
    } else {
      this.studentService.updateStudents(productForm.value);
    }
    this.resetForm(productForm);
    this.toastr.success('Successful Operation', 'Product Registered');
  }

  resetForm(productForm?: NgForm){
      if (productForm != null) {
        productForm.reset();
        this.studentService.selectedStudent = new Students();
      }
  }

}
