import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
acno=""  //its a property of class
pswd=""

  //database
   database:any={
     1000:{acno:1000,uname:"ajith",password:1000,balance:4000},
     1001:{acno:1001,uname:"ismail",password:1001,balance:4005},
     1002:{acno:1002,uname:"sami",password:1002,balance:4002},
     1003:{acno:1003,uname:"bijo",password:1003,balance:4040}

   }
  constructor() { }

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
// login - using event binding
login(){
  //user entered acno and pswd
  var acno=this.acno
  var pswd=this.pswd

let database=this.database

if (acno in database) {
  if (pswd == database[acno]["password"]) {
    
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
