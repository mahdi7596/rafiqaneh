import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReyaziComponent } from './reyazi.component';

describe('ReyaziComponent', () => {
  let component: ReyaziComponent;
  let fixture: ComponentFixture<ReyaziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReyaziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReyaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
