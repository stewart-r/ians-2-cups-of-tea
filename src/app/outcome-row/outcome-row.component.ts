import { Component, OnInit, Input } from '@angular/core';
import { SimulationState } from '../bag-picker.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-outcome-row',
  templateUrl: './outcome-row.component.html',
  styleUrls: ['./outcome-row.component.css']
})
export class OutcomeRowComponent implements OnInit {

  constructor() { }

  @Input()
  states: SimulationState[];

  @Input()
  sort: boolean = true;

  statesSorted() {
    if (this.sort){
      return this.states.sort((a,b) => {
        if (a.initialState < b.initialState) {
          return -1;
        } else if (a.initialState > b.initialState) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return this.states;
    }
    
  }

  @Input()
  width;
  

  cups(no: number) {
    return Array(no);
  }
  ngOnInit(): void {
  }

}
