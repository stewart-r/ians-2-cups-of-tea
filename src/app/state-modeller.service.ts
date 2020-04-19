import { Injectable } from '@angular/core';
import { SimulationState } from './bag-picker.service';

@Injectable({
  providedIn: 'root'
})
export class StateModellerService {

  constructor() { }

  generate(code?:string): SimulationState {
    if (!code) return {
      initialState: "double",
      noOfCups: 2
    };
    
    const noOfCups = parseInt(code[1]) as any;
    if (code[0] === 'l') {
      return {
        noOfCups: noOfCups,
        initialState: 'left'
      };
    } else if (code[0] === 'r'){
      return {
        noOfCups: noOfCups,
        initialState: 'right'
      }
    } else if (code[0] === 's'){
      return {
        noOfCups: noOfCups,
        initialState: 'singles'
      }
    } else if (code[0] === 'd'){
        return {
          noOfCups: noOfCups,
          initialState: 'double'
        }
      }

  }
}
