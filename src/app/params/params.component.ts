import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimulationInit, defaultInit } from '../initial-state';

export class Option {
  constructor(
    public value:'left' | 'right' | 'singles' | 'double', 
    public display:string) {
  }
}

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  constructor() { }
  
  @Input()
  state: SimulationInit = defaultInit;

  @Output()
  change = new EventEmitter<SimulationInit>()

  allStates = [
    new Option('double', "Double on Top"),
    new Option('singles', "Singles on Top"),
    new Option('left', "Left Single on Top"),
    new Option('right', "Right Single on Top"),
  ]

  simulation(): void {
  }

  changed(): void {
    console.log(this.state);
    this.change.emit(this.state);
  }

  ngOnInit(): void {
  }

}
