import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardnerPercentResultComponent } from './gardner-percent-result.component';

describe('GardnerPercentResultComponent', () => {
  let component: GardnerPercentResultComponent;
  let fixture: ComponentFixture<GardnerPercentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardnerPercentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardnerPercentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
