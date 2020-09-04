import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai04Component } from './bai04.component';

describe('Bai04Component', () => {
  let component: Bai04Component;
  let fixture: ComponentFixture<Bai04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
