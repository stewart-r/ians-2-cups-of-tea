import { Component, OnInit, Input } from '@angular/core';
import { SimulationState, BagPickerService } from '../bag-picker.service';



@Component({
  selector: 'app-multi-tea-rounds',
  templateUrl: './multi-tea-rounds.component.html',
  styleUrls: ['./multi-tea-rounds.component.css']
})
export class MultiTeaRoundsComponent implements OnInit {

  constructor(
    private bagPicker: BagPickerService
  ) { }

  @Input()
  baseWidth: number;

  @Input()
  states: SimulationState[] = [{
    initialState: "double",
    noOfCups: 0,
    probability: 1 }]
  // },{
  //   initialState: "singles",
  //   noOfCups: 0,
  //   probability: 0.25
  // },{
  //   initialState: "left",
  //   noOfCups: 0,
  //   probability: 0.25
  // },{
  //   initialState: "right",
  //   noOfCups: 0,
  //   probability: 0.25
  // },];

  history = []
  debug = []

  historyString() {
    return this.history.map(i => `${i}-cup`).join(', ');
  }

  addRound(noOfCups:number|"random") {
    console.log(noOfCups);
    if (noOfCups === "random") {
      noOfCups = Math.floor(Math.random() * 5) + 1;
    }

    this.history.push(noOfCups);
    const statesWithCups: SimulationState[] = this.states.map(s => {
      return {
        initialState: s.initialState,
        noOfCups: noOfCups as any,
        probability: s.probability
      }
    });
    console.log(this.states);
    let nextStates = this.bagPicker.pickRow(statesWithCups);
    nextStates = this.bagPicker.consolodate(nextStates);
    this.debug.push(nextStates);
    while(Math.max(...nextStates.map(r => r.noOfCups)) > 0){
      nextStates = this.bagPicker.pickRow(statesWithCups);
      nextStates = this.bagPicker.consolodate(nextStates);
      this.debug.push(nextStates);
    }

    this.states = nextStates;
    console.log('done');
  }

  reset() {
    this.states =  [{
      initialState: "double",
      noOfCups: 0,
      probability: 1 }];
    this.history = [];
  }

  ngOnInit(): void {
  }

}
