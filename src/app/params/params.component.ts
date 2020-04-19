import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimulationState } from '../bag-picker.service';
import { StateModellerService } from '../state-modeller.service';

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

  constructor(
    private stateModellerSvc: StateModellerService
  ) { }
  
  @Input()
  state: SimulationState;

  @Input()
  simulationInProgress = false;

  @Input()
  simEnabled = true;

  @Input()
  changeEnabled=true;

  @Output()
  change = new EventEmitter<SimulationState>()

  @Output()
  simulationStart = new EventEmitter<SimulationState>();

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
    this.change.emit(this.state);
  }

  ngOnInit(): void {
  }

}
