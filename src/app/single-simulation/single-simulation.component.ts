import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SimulationState, BagPickerService } from '../bag-picker.service';
import { MetronomeService } from '../metronome.service';
import { timer, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StateModellerService } from '../state-modeller.service';

@Component({
  selector: 'app-single-simulation',
  templateUrl: './single-simulation.component.html',
  styleUrls: ['./single-simulation.component.css']
})
export class SingleSimulationComponent implements OnInit, OnDestroy {

  constructor(
    private bagPickerService: BagPickerService,
    private metronome: MetronomeService,
    private stateModeller: StateModellerService
  ) { }

  @Input()
  width;

  @Input()
  simEnabled=true;

  @Input()
  state: SimulationState = this.stateModeller.generate();

  @Input()
  changeEnabled = true;

  transitionState: "left" | "right" | false = false;

  noOfCupsFilledAlready=0;

  simulationInProgress=false;

  noOfBagsInTransition() {
    if (this.simulationInProgress) {
      if (this.state.initialState === 'double') {
        return 2;
      } else if (this.state.initialState === 'singles') {
        return 1;
      } else if (this.state.initialState === this.transitionState) {
        return 1;
      } else {
        return 2;
      }
    }
    else {
       return 0;
     }

     
  }



  changed(event: SimulationState){
    if (event.initialState && event.noOfCups) {
      this.state = {
        initialState: event.initialState,
        noOfCups: event.noOfCups
      };
    }

  }

  frameSubscription: Subscription;
  originalFrameIdx: number;

  frameRate = 6;

  transition() {
    if (Math.random() > 0.5) {
      this.transitionState = "left"   
    } else {
      this.transitionState = "right"
    }
  }

  nextFrame(event:number) {
    console.log(this.transitionState);
    if (this.transitionState) {
      const pick = this.bagPickerService.pick(this.state, 'left');
      const nextState: SimulationState = pick[Math.floor(Math.random() * pick.length)];
      this.noOfCupsFilledAlready += this.noOfBagsInTransition();
      this.state = nextState;
      if (this.state.noOfCups === 0) {
        this.frameSubscription.unsubscribe();
        this.frameSubscription = null;
      }
      this.transitionState = false;
      this.simulationInProgress = false;
    }
    else {
      this.transition();
    }
  }

  simulationStarted(event: SimulationState) {
    this.simulationInProgress = true;
    
    this.frameSubscription = this.metronome.ticks.subscribe(tick => {
      if (this.originalFrameIdx) {
        this.frameSubscription.unsubscribe();
        this.frameSubscription = this.metronome
          .ticks
          .pipe(filter(n => {
            return (n % this.frameRate) === (this.originalFrameIdx % this.frameRate) 
          }))
          .subscribe(e => this.nextFrame(e))
      } else {
        this.originalFrameIdx = tick;
      }
    })
    
    
  
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    if (this.frameSubscription && !this.frameSubscription.closed) {
      this.frameSubscription.unsubscribe();
    }
  }

}
