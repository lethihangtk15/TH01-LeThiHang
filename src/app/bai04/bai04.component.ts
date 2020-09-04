import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai04',
  templateUrl: './bai04.component.html',
  styleUrls: ['./bai04.component.css']
})
export class Bai04Component implements OnInit {
  title="Bài 4: Lọc ra những người có điểm thi lớn hơn 8 và quê Hải Phòng";
  ds=[{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},{ hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}];
  kq="";
  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < this.ds.length; i++) {
      if (this.ds[i].diemthi>8 && this.ds[i].quequan=="Hai Phong") {
        this.kq += this.ds[i].hoten+", "+this.ds[i].quequan+", "+this.ds[i].diemthi+"; ";
      }

    }
  }

}
