import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.css']
})
export class DeletComponent {
  @Input() item:String|undefined
  //
 @Output() onCancel=new EventEmitter()
 @Output()  onDelete=new EventEmitter()

  constructor(){

  }
cancel(){
  this.onCancel.emit()
}
delete(){
this.onDelete.emit(this.item)
}
}
