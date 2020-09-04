import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai06',
  templateUrl: './bai06.component.html',
  styleUrls: ['./bai06.component.css']
})
export class Bai06Component implements OnInit {

  title="Bai 6: Tinh tong cac so nguyen duong trong day so";
  constructor() { }
  public tongduong(n:number[]){
    let s=0;
    for (let i = 0; i <n.length; i++) {
      if (n[i]>0) {
        s+=n[i];
      }else continue;
    }return s;
  }
  tong=0;
  dayso=[-9,-5,3,4,5,6,3,78];
  ngOnInit(): void {
    this.tong=this.tongduong(this.dayso);
  }

}
