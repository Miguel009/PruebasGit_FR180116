import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

import {Students} from '../models/students';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  StudentList: AngularFireList<any>;
  selectedStudent: Students = new Students();
  constructor(private firebase:AngularFireDatabase) { }

  getStudents(){
    return this.StudentList = this.firebase.list('students');
  }

  insertStudents(students:Students){
    this.StudentList.push({
      name: students.name,
      lastname: students.lastname,
      age: students.age
    });
  }

  updateStudents(students:Students){
    this.StudentList.update(students.$key, {
      name: students.name,
      lastname: students.lastname,
      age: students.age
    });
  }

  deleteStudent($key: string){
    this.StudentList.remove($key);
  }
}
