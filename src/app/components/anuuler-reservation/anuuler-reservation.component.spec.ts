import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuulerReservationComponent } from './anuuler-reservation.component';

describe('AnuulerReservationComponent', () => {
  let component: AnuulerReservationComponent;
  let fixture: ComponentFixture<AnuulerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuulerReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuulerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
