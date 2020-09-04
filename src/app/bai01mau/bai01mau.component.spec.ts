import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai01mauComponent } from './bai01mau.component';

describe('Bai01mauComponent', () => {
  let component: Bai01mauComponent;
  let fixture: ComponentFixture<Bai01mauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai01mauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai01mauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
