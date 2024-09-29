import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollandFinalResultComponent } from './holland-final-result.component';

describe('HollandFinalResultComponent', () => {
  let component: HollandFinalResultComponent;
  let fixture: ComponentFixture<HollandFinalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollandFinalResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandFinalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
