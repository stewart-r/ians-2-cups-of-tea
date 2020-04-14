import { Component, OnInit, Input } from '@angular/core';

export interface ICup {
  state: "full"|"empty"|"highlight"
}

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css']
})
export class CupsComponent implements OnInit {

  constructor() { }

  @Input()
  noOfCups: number;

  @Input()
  width: number;

  getCups(): Array<ICup> {
    let ret:Array<ICup> = Array.from(Array(this.noOfCups)).map(_ =>  {
      return {state: "empty"};
    });
    return ret;
  }

  ngOnInit(): void {
  }

}
