import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessengerComponent } from './list-messenger.component';

describe('ListMessengerComponent', () => {
  let component: ListMessengerComponent;
  let fixture: ComponentFixture<ListMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
