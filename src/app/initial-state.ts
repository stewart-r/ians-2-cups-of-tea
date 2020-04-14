export interface SimulationInit {
    initialState: 'left' | 'right' | 'singles' | 'double', 
    noOfCups: 1 | 2 | 3 | 4 | 5
}

export const defaultInit: SimulationInit = {
    initialState: "double",
    noOfCups: 2
  };