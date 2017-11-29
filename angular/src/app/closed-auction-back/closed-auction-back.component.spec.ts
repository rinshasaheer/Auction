import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedAuctionBackComponent } from './closed-auction-back.component';

describe('ClosedAuctionBackComponent', () => {
  let component: ClosedAuctionBackComponent;
  let fixture: ComponentFixture<ClosedAuctionBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedAuctionBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedAuctionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
