import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPlaceComponent } from './third-place.component';

describe('ThirdPlaceComponent', () => {
  let component: ThirdPlaceComponent;
  let fixture: ComponentFixture<ThirdPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
