import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsasiManteghiComponent } from './ehsasi-manteghi.component';

describe('EhsasiManteghiComponent', () => {
  let component: EhsasiManteghiComponent;
  let fixture: ComponentFixture<EhsasiManteghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhsasiManteghiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsasiManteghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
