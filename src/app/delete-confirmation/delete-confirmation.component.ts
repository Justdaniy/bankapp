import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  @Input() item:string|undefined //input decerator is used for parent to child communication

  constructor() { }

  ngOnInit(): void {
  }

}
