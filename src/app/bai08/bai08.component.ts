import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai08',
  templateUrl: './bai08.component.html',
  styleUrls: ['./bai08.component.css']
})
export class Bai08Component implements OnInit {

  title="Bai 8: Tinh the tich hinh chop khi biet dien tich day va chieu cao";
  a=3;
  b=4;
  c=5;
  h=8;
  V=1;
  constructor() { }

  ngOnInit(): void {
    var hc=new HinhChop(this.a,this.b,this.c,this.h);
    this.V=hc.TheTich();
  }

}
export class HTG{
  protected a: number;
  protected b:number;
  protected c:number;
  constructor(a:number,b:number,c:number){
    this.a=a;
    this.b=b;
    this.c=c;
  }
  public DienTichHTG():number{
    let p=(this.a+this.b+this.c)/2;
    return Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
  }
}
export class HinhChop extends HTG{
  protected h:number;
  constructor(a:number,b:number,c:number,h:number){
    super(a,b,c);
    this.h=h;
  }
  public TheTich():number{
    return this.DienTichHTG()*this.h/3;
  }
}
