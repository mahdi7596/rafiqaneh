import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GharardadiComponent } from './gharardadi.component';

describe('GharardadiComponent', () => {
  let component: GharardadiComponent;
  let fixture: ComponentFixture<GharardadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GharardadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GharardadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
