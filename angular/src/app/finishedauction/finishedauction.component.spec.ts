import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedauctionComponent } from './finishedauction.component';

describe('FinishedauctionComponent', () => {
  let component: FinishedauctionComponent;
  let fixture: ComponentFixture<FinishedauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
