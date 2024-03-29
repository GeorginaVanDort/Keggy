import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription><br>
    <button (click)="addKeg(newDescription)" class="btn-primary btn-lg add-button">Add</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userDescription: HTMLInputElement){
    this.onSubmitNewKeg.emit(userDescription.value);
    userDescription.value = "";
  }
}
