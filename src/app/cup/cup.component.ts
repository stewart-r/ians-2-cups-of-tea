import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ICup } from '../cups/cups.component';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {
  ctx: CanvasRenderingContext2D;

  constructor() { }

  @ViewChild('cup', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;

  @Input()
  cup: ICup;

  gap = 20;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawCup();
  }
  drawCup() {
    this.ctx.clearRect(0,0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    const height = this.canvas.nativeElement.height * 0.75;
    const width = this.canvas.nativeElement.width / 2;
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(this.gap, this.gap);
    this.ctx.lineTo(this.gap * 2, this.gap + height);
    this.ctx.stroke();
  }


}
