import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyauctiontableComponent } from './myauctiontable.component';

describe('MyauctiontableComponent', () => {
  let component: MyauctiontableComponent;
  let fixture: ComponentFixture<MyauctiontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyauctiontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyauctiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
