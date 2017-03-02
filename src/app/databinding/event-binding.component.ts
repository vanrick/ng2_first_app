import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)='onClick()'> Click ME </button>
  `,
  styles: []
})
export class EventBindingComponent{
  @Output() clicked = new EventEmitter<string>();
  onClick(){
    return this.clicked.emit('It Works!');
  }

}
