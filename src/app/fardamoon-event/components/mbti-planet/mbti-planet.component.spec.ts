import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtiPlanetComponent } from './mbti-planet.component';

describe('MbtiPlanetComponent', () => {
  let component: MbtiPlanetComponent;
  let fixture: ComponentFixture<MbtiPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbtiPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
