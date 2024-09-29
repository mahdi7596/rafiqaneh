import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontViewsComponent } from './front-views.component';

describe('FrontViewsComponent', () => {
  let component: FrontViewsComponent;
  let fixture: ComponentFixture<FrontViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
