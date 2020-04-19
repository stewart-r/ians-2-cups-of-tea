import { Component, OnInit } from '@angular/core';
import { StateModellerService } from '../state-modeller.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private stateModeller: StateModellerService) { }

  width=300;

  getState(code){
    console.log(code);
    return this.stateModeller.generate(code);
  }

  ngOnInit(): void {
  }

}
