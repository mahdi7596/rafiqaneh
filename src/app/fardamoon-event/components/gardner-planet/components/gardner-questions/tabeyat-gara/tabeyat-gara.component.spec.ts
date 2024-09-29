import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabeyatGaraComponent } from './tabeyat-gara.component';

describe('TabeyatGaraComponent', () => {
  let component: TabeyatGaraComponent;
  let fixture: ComponentFixture<TabeyatGaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabeyatGaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabeyatGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
