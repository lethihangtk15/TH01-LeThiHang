import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai05Component } from './bai05.component';

describe('Bai05Component', () => {
  let component: Bai05Component;
  let fixture: ComponentFixture<Bai05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
