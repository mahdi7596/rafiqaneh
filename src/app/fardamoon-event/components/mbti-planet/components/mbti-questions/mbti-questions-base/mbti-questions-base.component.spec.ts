import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtiQuestionsBaseComponent } from './mbti-questions-base.component';

describe('MbtiQuestionsBaseComponent', () => {
  let component: MbtiQuestionsBaseComponent;
  let fixture: ComponentFixture<MbtiQuestionsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbtiQuestionsBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiQuestionsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
