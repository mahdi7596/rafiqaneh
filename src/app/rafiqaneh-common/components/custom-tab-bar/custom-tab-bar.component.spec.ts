import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTabBarComponent } from './custom-tab-bar.component';

describe('CustomTabBarComponent', () => {
  let component: CustomTabBarComponent;
  let fixture: ComponentFixture<CustomTabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTabBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
