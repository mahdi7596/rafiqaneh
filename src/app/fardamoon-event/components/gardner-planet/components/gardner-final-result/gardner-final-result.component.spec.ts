import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardnerFinalResultComponent } from './gardner-final-result.component';

describe('GardnerFinalResultComponent', () => {
  let component: GardnerFinalResultComponent;
  let fixture: ComponentFixture<GardnerFinalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardnerFinalResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardnerFinalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
