import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedAuctionComponent } from './closed-auction.component';

describe('ClosedAuctionComponent', () => {
  let component: ClosedAuctionComponent;
  let fixture: ComponentFixture<ClosedAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
