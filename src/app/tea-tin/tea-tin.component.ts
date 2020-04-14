import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tea-tin',
  templateUrl: './tea-tin.component.html',
  styleUrls: ['./tea-tin.component.css']
})
export class TeaTinComponent implements OnInit {

  constructor() { }

  @ViewChild('tin', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;

  _state: 'left' | 'right' | 'singles' | 'double';

  @Input()
  set state(value: 'left' | 'right' | 'singles' | 'double'){
    this._state = value;
    if(this.ctx){
      this.drawTin();
    }
  } 
  get state(): 'left' | 'right' | 'singles' | 'double' {
    return this._state;
  }


  @Input()
  width = 300;

  @Input()
  height: number;

  tinPos: [number, number]; //= [20.5,20.5];
  tinDims: [number, number]; //= [250, 120];

  gap: number = 14;

  stateTitle() {
    switch(this._state) {
      case "left":
        return "Left Single on Top";
      case "right":
        return "Right Single on Top";
      case "singles":
        return "Singles on Top";
      case "double":
        return "Double on Top";
    }
  }

  private ctx: CanvasRenderingContext2D;

  private drawTin(highlight=false): void {
    this.ctx.clearRect(0,0,this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.height = this.height ?? this.width / 2;
    
    this.ctx.lineWidth = 1;
    
    this.tinPos = [this.gap * 1.5 + 0.5, this.gap + 0.5];
    this.tinDims = [this.ctx.canvas.width - this.gap * 3, this.ctx.canvas.height - this.gap * 2]
    this.ctx.moveTo(this.tinPos[0], this.tinPos[1]);
    this.ctx.lineTo(this.tinPos[0], this.tinPos[1] + this.tinDims[1]);
    this.ctx.lineTo(this.tinPos[0] + this.tinDims[0], this.tinPos[1] + this.tinDims[1]);
    this.ctx.lineTo(this.tinPos[0] + this.tinDims[0], this.tinPos[1]);
    const start = this.tinPos[1] + this.tinDims[1];
    const end = this.tinPos[0] + 2 * this.gap;
  
    for (var i = start; i > end; i-=this.gap ){
      this.drawDouble(i);
    }
    
    switch(this._state){
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
    this.ctx.stroke();
  
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
    this.drawTin();
    
  }

  animate() {
    console.log('animate');
  }


}
