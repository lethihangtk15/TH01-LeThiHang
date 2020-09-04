import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai06Component } from './bai06.component';

describe('Bai06Component', () => {
  let component: Bai06Component;
  let fixture: ComponentFixture<Bai06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
