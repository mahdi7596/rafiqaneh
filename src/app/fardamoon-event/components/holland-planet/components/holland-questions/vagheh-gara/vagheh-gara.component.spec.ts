import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaghehGaraComponent } from './vagheh-gara.component';

describe('VaghehGaraComponent', () => {
  let component: VaghehGaraComponent;
  let fixture: ComponentFixture<VaghehGaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaghehGaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaghehGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
