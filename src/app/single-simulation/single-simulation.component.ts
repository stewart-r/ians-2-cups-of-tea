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

  changed(event: SimulationInit){
    this.state = event;
  }

  ngOnInit(): void {
  }

}
