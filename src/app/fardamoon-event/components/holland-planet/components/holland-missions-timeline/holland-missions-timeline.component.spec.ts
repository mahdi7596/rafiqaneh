import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollandMissionsTimelineComponent } from './holland-missions-timeline.component';

describe('HollandMissionsTimelineComponent', () => {
  let component: HollandMissionsTimelineComponent;
  let fixture: ComponentFixture<HollandMissionsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollandMissionsTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandMissionsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
