import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasoorComponent } from './jasoor.component';

describe('JasoorComponent', () => {
  let component: JasoorComponent;
  let fixture: ComponentFixture<JasoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JasoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
