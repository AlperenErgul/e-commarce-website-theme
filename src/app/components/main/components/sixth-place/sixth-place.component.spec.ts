import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthPlaceComponent } from './sixth-place.component';

describe('SixthPlaceComponent', () => {
  let component: SixthPlaceComponent;
  let fixture: ComponentFixture<SixthPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
