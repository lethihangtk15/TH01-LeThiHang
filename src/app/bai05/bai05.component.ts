import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai05',
  templateUrl: './bai05.component.html',
  styleUrls: ['./bai05.component.css']
})
export class Bai05Component implements OnInit {

  title="Bài 5: Cho biết các số chính phương có trong dãy số";
  dayso=[1,2,4,5,6,9,11,12,22,23,64];
  kq=" ";
  constructor() { }

  ngOnInit(): void {
    let sochinhphuong = (n) =>{
      return Math.pow(Math.floor(Math.sqrt(n)),2) ==n;
    }
    this.kq+=this.dayso.filter(sochinhphuong);
  }

}
