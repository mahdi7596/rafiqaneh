import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtiPercentResultComponent } from './mbti-percent-result.component';

describe('MbtiPercentResultComponent', () => {
  let component: MbtiPercentResultComponent;
  let fixture: ComponentFixture<MbtiPercentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbtiPercentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiPercentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
