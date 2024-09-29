import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaroonFardiComponent } from './daroon-fardi.component';

describe('DaroonFardiComponent', () => {
  let component: DaroonFardiComponent;
  let fixture: ComponentFixture<DaroonFardiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaroonFardiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaroonFardiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
