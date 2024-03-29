import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}</h3>
    <h3>{{ keg.brand }}</h3>
    <h3>{{ keg.price }}</h3>
    <h3>{{ keg.ABV }}</h3>
    <h3>{{ keg.pints }}</h3>
  `
})

export class KegComponent {
  public keg: Keg;
}
