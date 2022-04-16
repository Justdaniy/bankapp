import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  pswd=""
  acno=""
  constructor(private db:DataService, private router: Router) { }

  ngOnInit(): void {
  }
register(){
var acno=this.acno
var pswd=this.pswd
var uname=this.uname
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
