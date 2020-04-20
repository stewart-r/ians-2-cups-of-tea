import { Component, OnInit, Input } from '@angular/core';
import { SimulationState, BagPickerService } from '../bag-picker.service';

export interface IRow {
  states: SimulationState[],
  consolodated?: SimulationState[];
}

@Component({
  selector: 'app-tea-round',
  templateUrl: './tea-round.component.html',
  styleUrls: ['./tea-round.component.css']
})
export class TeaRoundComponent implements OnInit {

  constructor(
    private bagPicker: BagPickerService
  ) { }

  @Input()
  fromState:SimulationState;

  @Input()
  baseWidth: number;

  showDetails: boolean;

  lastRow():SimulationState[] {
    const states = this.states();
    const last = states[states.length - 1];
    return last.consolodated ?? last.states;
  }

  states():IRow[]{
    let row:SimulationState[] = [{
      probability: this.fromState.probability ?? 1.0,
      initialState: this.fromState.initialState,
      noOfCups: this.fromState.noOfCups
    }];
    const ret: IRow[] = [{
      states: row,
    }];

    let idx = 1;

    while(Math.max(...row.map(r => r.noOfCups)) > 0){
      const rawRow = this.bagPicker.pickRow(row);
      row = this.bagPicker.consolodate(rawRow);
      ret.push({
        states: rawRow,
        consolodated: row.length < rawRow.length ? row : null
      });
      idx++;
    }
    return ret;
  }

  

  ngOnInit(): void {
  }

}
