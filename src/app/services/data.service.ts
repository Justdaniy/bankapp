import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

//database
database:any={
  1000:{acno:1000,uname:"ajith",password:1000,balance:5000,transaction:[]},
  1001:{acno:1001,uname:"ismail",password:1001,balance:5000,transaction:[]},
  1002:{acno:1002,uname:"sami",password:1002,balance:5000,transaction:[]},
  1003:{acno:1003,uname:"bijo",password:1003,balance:5000,transaction:[]}

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
        balance:0,
        transaction:[]
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
    this.currentUser=database[acno]["uname"]
    this.currentAcno=acno //to assign acno into currentAcno to to get the acno of login person to know whose transaction history is needed
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
   database[acno]["transaction"].push({   //to insert type and amount into transaction array we use push method
     type:"credit",
     amount:amount
   })
  // console.log(database);
   
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



//withdraw
withdraw(acno:any,pswd:any,amt:any){
  
  let database=this.database

  var amount=parseInt(amt)

if (acno in database) {
  if (pswd == database[acno]["password"]) {
    if (database[acno]["balance"]>amount) {
      database[acno]["balance"]-= amount
      database[acno]["transaction"].push({
        type:"debit",
        amount:amount})
   //     console.log(database);
        
    return database[acno]["balance"]
    }
     else {
      alert("insufficient balnce!!!")
    }
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


//transaction
transaction(acno:any){
return this.database[acno].transaction
}
}
