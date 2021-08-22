import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthPlaceComponent } from './fifth-place.component';

describe('FifthPlaceComponent', () => {
  let component: FifthPlaceComponent;
  let fixture: ComponentFixture<FifthPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
