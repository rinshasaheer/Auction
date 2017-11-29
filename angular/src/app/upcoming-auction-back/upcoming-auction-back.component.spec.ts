import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAuctionBackComponent } from './upcoming-auction-back.component';

describe('UpcomingAuctionBackComponent', () => {
  let component: UpcomingAuctionBackComponent;
  let fixture: ComponentFixture<UpcomingAuctionBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingAuctionBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingAuctionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
