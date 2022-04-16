import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//database
database:any={
  1000:{acno:1000,uname:"ajith",password:1000,balance:4000},
  1001:{acno:1001,uname:"ismail",password:1001,balance:4005},
  1002:{acno:1002,uname:"sami",password:1002,balance:4002},
  1003:{acno:1003,uname:"bijo",password:1003,balance:4040}

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
}
