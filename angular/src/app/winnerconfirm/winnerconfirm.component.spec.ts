import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerconfirmComponent } from './winnerconfirm.component';

describe('WinnerconfirmComponent', () => {
  let component: WinnerconfirmComponent;
  let fixture: ComponentFixture<WinnerconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
