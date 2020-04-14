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
    const offset = width / 2;
    this.gap = this.canvas.nativeElement.width / 16;
    console.log(this.gap);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = this.gap / 6;
    this.ctx.moveTo(offset + this.gap, this.gap);
    this.ctx.lineTo(offset + this.gap * 2, this.gap + height);
    this.ctx.lineTo(offset + width - this.gap * 2, this.gap + height);
    this.ctx.lineTo(offset + width - this.gap, this.gap);
    this.ctx.moveTo(offset + width - this.gap * 1.2, this.gap + 0.25 * height)
    this.ctx.lineTo(offset + width - this.gap * 0.2, this.gap + 0.25 * height)
    this.ctx.lineTo(offset + width - this.gap * 0.2, this.gap + 0.6 * height)
    this.ctx.lineTo(offset + width - this.gap * 1.6, this.gap + 0.6 * height)
    this.ctx.stroke();
  }


}
