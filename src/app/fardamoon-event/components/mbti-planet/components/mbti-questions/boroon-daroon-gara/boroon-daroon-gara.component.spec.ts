import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoroonDaroonGaraComponent } from './boroon-daroon-gara.component';

describe('BoroonDaroonGaraComponent', () => {
  let component: BoroonDaroonGaraComponent;
  let fixture: ComponentFixture<BoroonDaroonGaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoroonDaroonGaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoroonDaroonGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
