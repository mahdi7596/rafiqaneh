import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollandQuestionsBaseComponent } from './holland-questions-base.component';

describe('HollandQuestionsBaseComponent', () => {
  let component: HollandQuestionsBaseComponent;
  let fixture: ComponentFixture<HollandQuestionsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollandQuestionsBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandQuestionsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
