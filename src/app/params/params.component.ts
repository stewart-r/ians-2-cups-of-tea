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

  @Input()
  simulationInProgress = false;

  @Output()
  change = new EventEmitter<SimulationInit>()

  @Output()
  simulationStart = new EventEmitter<SimulationInit>();

  allStates = [
    new Option('double', "Double on Top"),
    new Option('singles', "Singles on Top"),
    new Option('left', "Left Single on Top"),
    new Option('right', "Right Single on Top"),
  ]

  simulation(): void {
    this.simulationInProgress = true;
    this.simulationStart.emit(this.state);
  }

  changed(event: any): void {
    console.log(event);
    console.log(this.state);
    this.change.emit(this.state);
  }

  ngOnInit(): void {
  }

}
