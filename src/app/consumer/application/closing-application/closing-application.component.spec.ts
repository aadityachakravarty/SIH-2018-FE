import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingApplicationComponent } from './closing-application.component';

describe('ClosingApplicationComponent', () => {
  let component: ClosingApplicationComponent;
  let fixture: ComponentFixture<ClosingApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
