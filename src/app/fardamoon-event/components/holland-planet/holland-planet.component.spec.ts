import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollandPlanetComponent } from './holland-planet.component';

describe('HollandPlanetComponent', () => {
  let component: HollandPlanetComponent;
  let fixture: ComponentFixture<HollandPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollandPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
