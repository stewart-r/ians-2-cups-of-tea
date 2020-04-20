import { Injectable } from '@angular/core';


export interface SimulationState {
  initialState: 'left' | 'right' | 'singles' | 'double', 
  noOfCups: 0 | 1 | 2 | 3 | 4 | 5
  probability?: number
}


@Injectable({
  providedIn: 'root'
})
export class BagPickerService {

  constructor() { }

  public consolodate(inRow: SimulationState[]): SimulationState[] {
    const ret: SimulationState[] = [];
    function indexOf(state: SimulationState, arr: SimulationState[]):number {
      for (var i = 0; i < arr.length; i++){
        if (arr[i].initialState === state.initialState && arr[i].noOfCups === state.noOfCups){
          return i;
        }
      }
      return i;
    }
    
    inRow.forEach(s => {
      const idx = indexOf(s, ret);
      if (idx >= ret.length){
        ret.push({
          initialState: s.initialState,
          noOfCups: s.noOfCups,
          probability: s.probability
        });
      } else {
        ret[idx].probability += s.probability
      }
    });

    return ret;
  }

  pickRow(inRow: SimulationState[]){
    const ret: SimulationState[] = [];
    inRow.forEach(s => {
      if (s.noOfCups === 0){
        ret.push(s);
      } else {
        const leftPick = this.pick(s, 'left');
        const left = leftPick.map(o => ({
          noOfCups: o.noOfCups,
          initialState: o.initialState,
          probability: s.probability / (leftPick.length * 2)
        }));
        ret.push(...left);
        const rightPick = this.pick(s, 'right');
        const right = rightPick.map(o => ({
          noOfCups: o.noOfCups,
          initialState: o.initialState,
          probability: s.probability / (rightPick.length * 2)
        }));
        ret.push(...right);
      }
    });
    return ret;
  }
  
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
