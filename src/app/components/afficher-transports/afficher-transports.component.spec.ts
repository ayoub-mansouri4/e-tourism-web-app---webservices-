import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTransportsComponent } from './afficher-transports.component';

describe('AfficherTransportsComponent', () => {
  let component: AfficherTransportsComponent;
  let fixture: ComponentFixture<AfficherTransportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTransportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTransportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
