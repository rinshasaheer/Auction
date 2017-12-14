import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionBackComponent } from './auction-back.component';

describe('AuctionBackComponent', () => {
  let component: AuctionBackComponent;
  let fixture: ComponentFixture<AuctionBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
