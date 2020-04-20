import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetronomeService {

  //public ticks: Observable<number>;

  // constructor() {
  //   const source = timer(5000,5000);
  //   this.ticks = source.pipe(map((_, idx)=> {
  //     return idx % 12;
  //   }))
  // }

}
