import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-tea-tin',
  templateUrl: './tea-tin.component.html',
  styleUrls: ['./tea-tin.component.css']
})
export class TeaTinComponent implements OnInit {

  constructor() { }

  @ViewChild('tin', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;

  @Input()
  state: 'left' | 'right' | 'singles' | 'double';

  tinPos: [number, number]; //= [20.5,20.5];
  tinDims: [number, number]; //= [250, 120];

  gap: number = 14;

  private ctx: CanvasRenderingContext2D;

  private drawTin(): void {
      this.ctx.moveTo(this.tinPos[0], this.tinPos[1]);
      this.ctx.lineTo(this.tinPos[0], this.tinPos[1] + this.tinDims[1]);
      this.ctx.lineTo(this.tinPos[0] + this.tinDims[0], this.tinPos[1] + this.tinDims[1]);
      this.ctx.lineTo(this.tinPos[0] + this.tinDims[0], this.tinPos[1]);
      this.ctx.stroke();
      const start = this.tinPos[1] + this.tinDims[1];
      const end = this.tinPos[0] + 2 * this.gap;
      for (var i = start; i > end; i-=this.gap ){
        this.drawDouble(i);
      }
      switch(this.state){
        case 'left':
          this.drawLeft(i);
          break;
        case 'right':
          this.drawRight(i);
          break;
        case 'double':
          this.drawDouble(i);
          break;
        case 'singles':
          this.draw2Singles(i);
          break;
      }

  }

  private length() {
    return this.tinDims[0] - this.gap * 2;
  } 

  private drawDouble(pos: number) {
    this.ctx.moveTo(this.tinPos[0] + this.gap, pos);
    this.ctx.lineTo(this.tinPos[0] + this.length() + this.gap, pos);
    this.ctx.stroke();
  }

  private drawLeft(pos: number) {
    this.ctx.moveTo(this.tinPos[0] + this.gap, pos);
    this.ctx.lineTo(this.tinPos[0] + this.gap +  this.length() / 2 - this.gap / 2, pos);
    this.ctx.stroke();
  }

  private drawRight(pos: number) {
    this.ctx.moveTo(this.tinPos[0] + this.gap +  this.length() / 2 + this.gap / 2, pos);
    this.ctx.lineTo(this.tinPos[0] + this.length() + this.gap, pos);
    this.ctx.stroke();
  }

  private draw2Singles(pos: number)  {
    this.drawLeft(pos);
    this.drawRight(pos);
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.lineWidth = 1;
    this.tinPos = [this.gap * 1.5 + 0.5, this.gap + 0.5];
    this.tinDims = [this.ctx.canvas.width - this.gap * 4, this.ctx.canvas.height - this.gap * 2]
    this.drawTin();
    
    
  }

  animate() {
    console.log('animate');
  }


}
