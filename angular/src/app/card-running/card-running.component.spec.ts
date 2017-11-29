import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRunningComponent } from './card-running.component';

describe('CardRunningComponent', () => {
  let component: CardRunningComponent;
  let fixture: ComponentFixture<CardRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
