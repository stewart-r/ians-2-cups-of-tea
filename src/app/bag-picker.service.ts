import { Injectable } from '@angular/core';


export interface SimulationState {
  initialState: 'left' | 'right' | 'singles' | 'double', 
  noOfCups: 0 | 1 | 2 | 3 | 4 | 5
}


@Injectable({
  providedIn: 'root'
})
export class BagPickerService {

  constructor() { }

  
  pick(
    inState: SimulationState, 
    side: 'left' | 'right' | 'random'): Array<SimulationState> {
      if (side === 'random'){
        side = Math.random() > 0.5 ? 'right' : 'left';
      }
      if (inState.initialState === 'double') {
        if (inState.noOfCups > 1) {
          return [{
            initialState: "double",
            noOfCups: (inState.noOfCups - 2) as any
          }]
        } else {
          return [ {initialState:'left', noOfCups:0},{initialState:'right', noOfCups:0}]
          
        }
      } else if (inState.initialState === 'singles') {
        if (side === 'left') {
          return [{
            initialState: 'right',
            noOfCups: inState.noOfCups - 1 as any
          }]
        } else {
          return [{
            initialState: 'left',
            noOfCups: inState.noOfCups - 1 as any
          }]
        }
      } else if (inState.initialState === side) {
        return [{
          initialState: 'double',
          noOfCups: inState.noOfCups - 1 as any
        }]
      } else {
        
        if (inState.noOfCups === 1) {
          return [{
            initialState: 'singles',
            noOfCups: 0
          }]
        } else {
          return [{
            initialState: inState.initialState,
            noOfCups: inState.noOfCups - 2 as any
          }]
        }
      }
  }
}
