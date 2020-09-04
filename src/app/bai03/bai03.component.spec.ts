import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai03Component } from './bai03.component';

describe('Bai03Component', () => {
  let component: Bai03Component;
  let fixture: ComponentFixture<Bai03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
