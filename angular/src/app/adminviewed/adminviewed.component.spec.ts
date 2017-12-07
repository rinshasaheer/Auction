import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewedComponent } from './adminviewed.component';

describe('AdminviewedComponent', () => {
  let component: AdminviewedComponent;
  let fixture: ComponentFixture<AdminviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
