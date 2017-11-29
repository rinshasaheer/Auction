import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningauctionComponent } from './runningauction.component';

describe('RunningauctionComponent', () => {
  let component: RunningauctionComponent;
  let fixture: ComponentFixture<RunningauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
