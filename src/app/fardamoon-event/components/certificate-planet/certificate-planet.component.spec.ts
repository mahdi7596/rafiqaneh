import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatePlanetComponent } from './certificate-planet.component';

describe('CertificatePlanetComponent', () => {
  let component: CertificatePlanetComponent;
  let fixture: ComponentFixture<CertificatePlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatePlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
