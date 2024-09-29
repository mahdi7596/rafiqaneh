import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonariComponent } from './honari.component';

describe('HonariComponent', () => {
  let component: HonariComponent;
  let fixture: ComponentFixture<HonariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
