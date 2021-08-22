import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPlaceComponent } from './fourth-place.component';

describe('FourthPlaceComponent', () => {
  let component: FourthPlaceComponent;
  let fixture: ComponentFixture<FourthPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
