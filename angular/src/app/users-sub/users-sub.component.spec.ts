import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSubComponent } from './users-sub.component';

describe('UsersSubComponent', () => {
  let component: UsersSubComponent;
  let fixture: ComponentFixture<UsersSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
