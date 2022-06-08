import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMessengerComponent } from './register-messenger.component';

describe('RegisterMessengerComponent', () => {
  let component: RegisterMessengerComponent;
  let fixture: ComponentFixture<RegisterMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
