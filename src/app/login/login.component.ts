import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // properties of class
acno=""  
pswd=""

  //database
   database:any={
     1000:{acno:1000,uname:"ajith",password:1000,balance:4000},
     1001:{acno:1001,uname:"ismail",password:1001,balance:4005},
     1002:{acno:1002,uname:"sami",password:1002,balance:4002},
     1003:{acno:1003,uname:"bijo",password:1003,balance:4040}

   }
  constructor(private router:Router) { }

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

let database=this.database

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
