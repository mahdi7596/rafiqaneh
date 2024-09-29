import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhezavatiEdrakiComponent } from './ghezavati-edraki.component';

describe('GhezavatiEdrakiComponent', () => {
  let component: GhezavatiEdrakiComponent;
  let fixture: ComponentFixture<GhezavatiEdrakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhezavatiEdrakiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhezavatiEdrakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
