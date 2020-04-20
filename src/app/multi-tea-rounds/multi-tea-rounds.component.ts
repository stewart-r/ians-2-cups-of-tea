import { Component, OnInit, Input } from '@angular/core';
import { SimulationState, BagPickerService } from '../bag-picker.service';
import { GaService } from '../ga.service';



@Component({
  selector: 'app-multi-tea-rounds',
  templateUrl: './multi-tea-rounds.component.html',
  styleUrls: ['./multi-tea-rounds.component.css']
})
export class MultiTeaRoundsComponent implements OnInit {

  constructor(
    private bagPicker: BagPickerService,
    private ga: GaService
  ) { }

  @Input()
  baseWidth: number;

  @Input()
  states: SimulationState[] = [{
    initialState: "double",
    noOfCups: 0,
    probability: 1 
    }];

  history = [];

  @Input()
  byDay: boolean = false;

  @Input()
  probabilityDistributions:Array<Array<number>> = []

  @Input()
  showHistory: boolean = true;

  index = 0;

  historyString() {
    return this.history.map(i => `${i}-cup`).join(', ');
  }

  calcRound(inState: SimulationState[], noOfCups: number, probabilityMultiplier:number = 1) : SimulationState[] {
    const statesWithCups: SimulationState[] = inState.map(s => {
      return {
        initialState: s.initialState,
        noOfCups: noOfCups as any,
        probability: s.probability
      }
    });
    let nextStates = this.bagPicker.pickRow(statesWithCups);
    nextStates = this.bagPicker.consolodate(nextStates);
    
    while(Math.max(...nextStates.map(r => r.noOfCups)) > 0){
      nextStates = this.bagPicker.pickRow(nextStates);
      nextStates = this.bagPicker.consolodate(nextStates);
    }
    return nextStates.map(s => ({
      noOfCups: s.noOfCups,
      probability: s.probability * probabilityMultiplier,
      initialState: s.initialState
    }));
  }

  addRoundDistributed(distribution: number[]) {
    this.ga.sendEvent("Add Round Distributed", "Button Click", JSON.stringify(distribution));
    this.history.push(JSON.stringify(distribution));
    let nextState:SimulationState[] = [];
    for (var i=0; i<distribution.length; i++) {
      nextState.push(... this.calcRound(this.states, i+1, distribution[i]));
    }
    this.states = this.bagPicker.consolodate(nextState);
  }

  addRound(noOfCups:number|"random") {
    this.ga.sendEvent("Add Round", "Button Click", `Number of Cups ${noOfCups}`)
    if (noOfCups === "random") {
      noOfCups = Math.floor(Math.random() * 5) + 1;
    }

    this.history.push(noOfCups);
    this.states = this.calcRound(this.states, noOfCups);

  }

  addNextRound() {
    this.ga.sendEvent("Add Next Round", "Button Click", );
    this.addRoundDistributed(this.probabilityDistributions[this.index])
    this.index++;
  }

  advanceToEnd() {
    this.ga.sendEvent("Advance to End", "Button Click", );
    while(this.index < this.probabilityDistributions.length -1){
      this.addNextRound();
    }
  }

  reset() {
    this.ga.sendEvent("Reset", "Button Click", `pds: ${this.probabilityDistributions.length}` );
    this.states =  [{
      initialState: "double",
      noOfCups: 0,
      probability: 1 }];
    this.history = [];
    this.index = 0;
  }

  ngOnInit(): void {
  }

}
