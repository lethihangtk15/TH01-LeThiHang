import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai01mau',
  templateUrl: './bai01mau.component.html',
  styleUrls: ['./bai01mau.component.css']
})
export class Bai01mauComponent implements OnInit {

  title="Bai 1: Tinh tong S(n)=x + x^2 + x^3 +...+ x^n";
  constructor() { }
  s=0;
  ngOnInit(): void {
    let n = 10;

    for (let i = 1; i <= n; i++) {
      this.s+=1.0/i;
    }
  }

}
