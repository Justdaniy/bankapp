import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  @Input() item:string|undefined //input decerator is used for parent to child communication

 @Output() onCancel=new EventEmitter()  //'new' is used to create an object. here EventEmitter() is an object

 @Output() onDelete=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  cancel(){
    this.onCancel.emit()
  }

  delete(){
   this.onDelete.emit(this.item)
  }
}
