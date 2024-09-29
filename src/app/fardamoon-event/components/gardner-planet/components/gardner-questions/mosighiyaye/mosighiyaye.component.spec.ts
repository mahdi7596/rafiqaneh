import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosighiyayeComponent } from './mosighiyaye.component';

describe('MosighiyayeComponent', () => {
  let component: MosighiyayeComponent;
  let fixture: ComponentFixture<MosighiyayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosighiyayeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosighiyayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
