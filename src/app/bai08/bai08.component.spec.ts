import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai08Component } from './bai08.component';

describe('Bai08Component', () => {
  let component: Bai08Component;
  let fixture: ComponentFixture<Bai08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
