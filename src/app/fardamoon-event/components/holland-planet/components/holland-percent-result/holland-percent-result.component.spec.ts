import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollandPercentResultComponent } from './holland-percent-result.component';

describe('HollandPercentResultComponent', () => {
  let component: HollandPercentResultComponent;
  let fixture: ComponentFixture<HollandPercentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollandPercentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandPercentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
