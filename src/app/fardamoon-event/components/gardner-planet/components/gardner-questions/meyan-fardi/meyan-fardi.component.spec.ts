import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeyanFardiComponent } from './meyan-fardi.component';

describe('MeyanFardiComponent', () => {
  let component: MeyanFardiComponent;
  let fixture: ComponentFixture<MeyanFardiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeyanFardiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeyanFardiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
