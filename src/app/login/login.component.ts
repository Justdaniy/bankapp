import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

//login form model
loginForm = this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  
  
  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  login(){
  
    //user entered acno and pswd
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd
  if (this.loginForm.valid) {
   this.ds.login(acno,pswd)
   .subscribe((result:any)=>{
    if (result) {
      localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
      localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
      localStorage.setItem("token",JSON.stringify(result.token))

      alert(result.message)
        this.router.navigateByUrl("dashboard")
    }
   },
   (result)=>{
     alert(result.error.message)
   }
   )
  
  }
  else{
    alert("invalid form")
  }
  
  
  
  }

//accnoChange(event:any){
//this.acno= event.target.value  //"this" is used to indicate properties of class
//console.log(this.acno);

}

//pswdChange(event:any){
  //this.pswd= event.target.value  //"this" is used to indicate properties of class
  //console.log(this.pswd);
  
  //}
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


