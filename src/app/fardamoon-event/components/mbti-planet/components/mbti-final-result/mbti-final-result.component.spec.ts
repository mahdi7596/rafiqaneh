import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtiFinalResultComponent } from './mbti-final-result.component';

describe('MbtiFinalResultComponent', () => {
  let component: MbtiFinalResultComponent;
  let fixture: ComponentFixture<MbtiFinalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbtiFinalResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiFinalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
