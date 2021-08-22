import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPlaceComponent } from './second-place.component';

describe('SecondPlaceComponent', () => {
  let component: SecondPlaceComponent;
  let fixture: ComponentFixture<SecondPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
