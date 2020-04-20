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
  width;
  

  cups(no: number) {
    return Array(no);
  }
  ngOnInit(): void {
  }

}
