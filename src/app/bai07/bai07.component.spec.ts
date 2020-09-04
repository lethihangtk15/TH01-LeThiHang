import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai07Component } from './bai07.component';

describe('Bai07Component', () => {
  let component: Bai07Component;
  let fixture: ComponentFixture<Bai07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
