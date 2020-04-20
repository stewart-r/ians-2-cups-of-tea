import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})
export class GaService {

  constructor(

  ) {}

  sendEvent(
    eventName: string,
    eventAction: string,
    eventLabel:string = null) {
      
      gtag('event', eventName, {
        eventCategory: "Puzzle",
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: null
      });
      
  }
}
