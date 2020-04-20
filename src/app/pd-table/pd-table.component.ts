import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pd-table',
  templateUrl: './pd-table.component.html',
  styleUrls: ['./pd-table.component.css']
})
export class PdTableComponent implements OnInit {

  constructor() { }

  @Input()
  distribution: number[];

  ngOnInit(): void {
  }

}
