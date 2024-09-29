import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShohodiHessiComponent } from './shohodi-hessi.component';

describe('ShohodiHessiComponent', () => {
  let component: ShohodiHessiComponent;
  let fixture: ComponentFixture<ShohodiHessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShohodiHessiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShohodiHessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
