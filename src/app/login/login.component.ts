import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // properties of class
acno=""  
pswd=""

  
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

accnoChange(event:any){
this.acno= event.target.value  //"this" is used to indicate properties of class
console.log(this.acno);

}

pswdChange(event:any){
  this.pswd= event.target.value  //"this" is used to indicate properties of class
  console.log(this.pswd);
  
  }
// // login - using event binding
// login(){
//   //user entered acno and pswd
//   var acno=this.acno
//   var pswd=this.pswd

// let database=this.database

// if (acno in database) {
//   if (pswd == database[acno]["password"]) {
//     alert("login succefull!!!")
//   }
//    else {
//     alert("incorrect password!!!")
//   }
// }
// else{
//   alert("user does not exist!!!")
// }
// }


// login - using template referencing variable
// login(a:any,p:any){
//   console.log(a.value);
  
//   //user entered acno and pswd
//   var acno=a.value
//   var pswd=p.value

// let database=this.database

// if (acno in database) {
//   if (pswd == database[acno]["password"]) {
//     alert("login succefull!!!")
//   }
//    else {
//     alert("incorrect password!!!")
//   }
// }
// else{
//   alert("user does not exist!!!")
// }
// }


//two way binding using ngModel
login(){
  
  //user entered acno and pswd
  var acno=this.acno
  console.log(acno);
  
  var pswd=this.pswd

let database=this.ds.database

if (acno in database) {
  if (pswd == database[acno]["password"]) {
    alert("login succefull!!!")
    this.router.navigateByUrl("dashboard")
  }
   else {
    alert("incorrect password!!!")
  }
}
else{
  alert("user does not exist!!!")
}
}
}
