import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:any //used to hold the transaction array
  acno:any         // used to hold current acno

  constructor(private ds:DataService) {

   this.acno=this.ds.currentAcno
   this.transaction=this.ds.transaction(this.acno)
   console.log(this.transaction);
   

   }

  ngOnInit(): void {
  }

}
