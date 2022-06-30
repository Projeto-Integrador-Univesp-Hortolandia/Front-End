import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoCreateComponent } from './texto-create.component';

describe('TextoCreateComponent', () => {
  let component: TextoCreateComponent;
  let fixture: ComponentFixture<TextoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
