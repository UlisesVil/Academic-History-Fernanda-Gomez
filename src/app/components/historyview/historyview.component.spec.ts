import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryviewComponent } from './historyview.component';

describe('HistoryviewComponent', () => {
  let component: HistoryviewComponent;
  let fixture: ComponentFixture<HistoryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
