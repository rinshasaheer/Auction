import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningAuctionBackComponent } from './running-auction-back.component';

describe('RunningAuctionBackComponent', () => {
  let component: RunningAuctionBackComponent;
  let fixture: ComponentFixture<RunningAuctionBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningAuctionBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningAuctionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
