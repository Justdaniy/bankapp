import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

//registerForm model
registerForm = this.fb.group({unmae:[''],acno:[''],pswd:['']})

  constructor(private db:DataService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
var acno=this.registerForm.value.acno
var pswd=this.registerForm.value.pswd
var uname=this.registerForm.value.uname
const result= this.db.register(uname,acno,pswd)
if (result) {
  alert("succesfully registered")
  this.router.navigateByUrl("")
}
 else {
  alert("acount already exists..please login")
}
}
}
