import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOurComponent } from './join-our.component';

describe('JoinOurComponent', () => {
  let component: JoinOurComponent;
  let fixture: ComponentFixture<JoinOurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinOurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
