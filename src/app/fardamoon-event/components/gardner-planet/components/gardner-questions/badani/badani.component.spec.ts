import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadaniComponent } from './badani.component';

describe('BadaniComponent', () => {
  let component: BadaniComponent;
  let fixture: ComponentFixture<BadaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
