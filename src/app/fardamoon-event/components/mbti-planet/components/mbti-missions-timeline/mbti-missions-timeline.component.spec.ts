import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtiMissionsTimelineComponent } from './mbti-missions-timeline.component';

describe('MbtiMissionsTimelineComponent', () => {
  let component: MbtiMissionsTimelineComponent;
  let fixture: ComponentFixture<MbtiMissionsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbtiMissionsTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiMissionsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
