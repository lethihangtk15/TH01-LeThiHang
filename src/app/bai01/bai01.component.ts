import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bai01',
  templateUrl: './bai01.component.html',
  styleUrls: ['./bai01.component.css']
})
export class Bai01Component implements OnInit {
  title="Bai 1: Tinh S(n)=x + x^2 + x^3 +...+ x^n";
  x=3;
  n=10;
  s = 0;

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <=this.n; i++) {
      this.s+=Math.pow(this.x,i);
    }
  }
}
