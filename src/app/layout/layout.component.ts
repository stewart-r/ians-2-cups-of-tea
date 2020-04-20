import { Component, OnInit } from '@angular/core';
import { StateModellerService } from '../state-modeller.service';
import { SimulationState } from '../bag-picker.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private stateModeller: StateModellerService) { }

  width=300;

  opmState:SimulationState={noOfCups:2,initialState:'singles'}

  after5cup: SimulationState[] = [
    {noOfCups:0,initialState:'left', probability: 0.5},
    {noOfCups:0,initialState:'right', probability: 0.5},
  ]

  lhDemo: SimulationState[] = [
    {noOfCups:0,initialState:'left', probability: 0.5 * 0.75},
    {noOfCups:0,initialState:'right', probability: 0.5 * 0.25},
  ]

  rhDemo: SimulationState[] = [
    {noOfCups:0,initialState:'left', probability: 0.5 * 0.25},
    {noOfCups:0,initialState:'right', probability: 0.5 * 0.75},
  ]
  

  getState(code){
    return this.stateModeller.generate(code);
  }

  ngOnInit(): void {
  }

}
