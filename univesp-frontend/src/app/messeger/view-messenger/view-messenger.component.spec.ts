import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMessengerComponent } from './view-messenger.component';

describe('ViewMessengerComponent', () => {
  let component: ViewMessengerComponent;
  let fixture: ComponentFixture<ViewMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
