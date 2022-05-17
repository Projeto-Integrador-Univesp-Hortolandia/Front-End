import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegerComponent } from './messeger.component';

describe('MessegerComponent', () => {
  let component: MessegerComponent;
  let fixture: ComponentFixture<MessegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
