import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai02',
  templateUrl: './bai02.component.html',
  styleUrls: ['./bai02.component.css']
})
export class Bai02Component implements OnInit {
  title="Tinh S(x, n) = -x + X^2/2! - x^3/3! + ... + (-1)^n*x^n/n!";
  x=8;
  n=10;
  s=1;
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= this.n; i++){
      this.s += Math.pow(-1,(i))/this.GT(i);
    }
  }
  GT(n:number):number {
    for (let i = 1; i <= n; i++) {
      return n*=i;
    }
  }
}
