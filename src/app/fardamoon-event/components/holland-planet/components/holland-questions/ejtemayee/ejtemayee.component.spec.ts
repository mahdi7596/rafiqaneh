import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjtemayeeComponent } from './ejtemayee.component';

describe('EjtemayeeComponent', () => {
  let component: EjtemayeeComponent;
  let fixture: ComponentFixture<EjtemayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjtemayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjtemayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
