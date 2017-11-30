import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingauctionsComponent } from './upcomingauctions.component';

describe('UpcomingauctionsComponent', () => {
  let component: UpcomingauctionsComponent;
  let fixture: ComponentFixture<UpcomingauctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingauctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
