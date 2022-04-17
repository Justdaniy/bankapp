import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//database
database:any={
  1000:{acno:1000,uname:"ajith",password:1000,balance:5000},
  1001:{acno:1001,uname:"ismail",password:1001,balance:5000},
  1002:{acno:1002,uname:"sami",password:1002,balance:5000},
  1003:{acno:1003,uname:"bijo",password:1003,balance:5000}

}

  constructor() { }
  //register
  register(uname:any, acno:any, password:any){
    let database=this.database
    if (acno in database) {
      //user already exist
      return false
    } else {
      //add details into db
      database[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      console.log(database);
      return true
      
    }
  }
//login
//two way binding using ngModel
login(acno:any,pswd:any){
  
  //user entered acno and pswd
  

let database=this.database

if (acno in database) {
  if (pswd == database[acno]["password"]) {
    //already exist
    return true
  }
   else {
    alert("incorrect password!!!")
    return false
  }
}
else{
  alert("user does not exist!!!")
  return false
}
}

//deposit
deposit(acno:any,pswd:any,amt:any){
  
  let database=this.database

  var amount=parseInt(amt)

if (acno in database) {
  if (pswd == database[acno]["password"]) {
   database[acno]["balance"]+= amount
    return database[acno]["balance"]
  } 
  else {
    alert("incorrect password")
    return false
  }
} 
else {
  alert("user doesnt exist")
  return false
}
}

}
