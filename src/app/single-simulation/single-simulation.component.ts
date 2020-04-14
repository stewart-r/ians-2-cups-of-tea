import { Component, OnInit, Input } from '@angular/core';
import { SimulationInit, defaultInit } from '../initial-state';

@Component({
  selector: 'app-single-simulation',
  templateUrl: './single-simulation.component.html',
  styleUrls: ['./single-simulation.component.css']
})
export class SingleSimulationComponent implements OnInit {

  constructor() { }

  @Input()
  width;

  state: SimulationInit = defaultInit;

  simulationInProgress=false;

  changed(event: SimulationInit){
    console.log(event);
    if (event.initialState && event.noOfCups) {
      this.state = {
        initialState: event.initialState,
        noOfCups: event.noOfCups
      };
    }

  }

  simulationStarted(event: SimulationInit) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
