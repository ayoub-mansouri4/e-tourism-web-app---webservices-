import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuTouriComponent } from './lieu-touri.component';

describe('LieuTouriComponent', () => {
  let component: LieuTouriComponent;
  let fixture: ComponentFixture<LieuTouriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieuTouriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuTouriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
