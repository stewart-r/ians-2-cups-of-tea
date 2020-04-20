import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MetronomeService } from '../metronome.service';
import { Subscription } from 'rxjs';

export interface ICup {
  state: "full"|"empty"|"highlight"
}

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css']
})
export class CupsComponent implements OnInit, OnDestroy {

  constructor(
    private metronome: MetronomeService
  ) { }

  @Input()
  noOfCups: number;

  @Input()
  noOfCupsFilledAlready: number = 0;

  _noOfBagsInTransition: 0|1|2 = 0;

  @Input()
  set noOfBagsInTransition( value: 0 | 1 | 2) {
    console.log(value);
    this._noOfBagsInTransition = value;
    // if (value === 0) {
    //   if (this.metronomeSubscription){
    //     this.metronomeSubscription.unsubscribe();
    //   }
    //   this.metronomeSubscription = null;
    // } else if (!this.metronomeSubscription){
    //   this.metronomeSubscription = this.metronome.ticks.subscribe(this.metronomeTick);
    // }
  }
  get noOfBagsInTransition() {
    return this._noOfBagsInTransition;
  }


  @Input()
  width: number;

  metronomeSubscription: Subscription;

  getCups(): Array<ICup> {
    let ret:Array<ICup> = Array.from(Array(this.noOfCups + this.noOfCupsFilledAlready)).map((_, idx) =>  {
      if (this.noOfCupsFilledAlready > idx){
        return {state: "full"};
      } else if (this.noOfCupsFilledAlready + this._noOfBagsInTransition > idx) {
        return {state: "highlight"};
      } else {
        return {state: "empty"};
      }
      
    });
    return ret;
  }

  metronomeTick(tick: number): void {
  }

  ngOnInit(): void {
    //var subsription = this.metronome.ticks.subscribe(this.metronomeTick);
  }

  ngOnDestroy(): void {
    if (this.metronomeSubscription && !this.metronomeSubscription.closed) {
      this.metronomeSubscription.unsubscribe();
    }
  }

}
