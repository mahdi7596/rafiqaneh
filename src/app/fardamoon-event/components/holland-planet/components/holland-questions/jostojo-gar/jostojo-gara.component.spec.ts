import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JostojoGaraComponent } from './jostojo-gara.component';

describe('JostojoGaraComponent', () => {
  let component: JostojoGaraComponent;
  let fixture: ComponentFixture<JostojoGaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JostojoGaraComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JostojoGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
