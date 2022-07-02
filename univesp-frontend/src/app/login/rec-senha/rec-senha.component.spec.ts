import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSenhaComponent } from './rec-senha.component';

describe('RecSenhaComponent', () => {
  let component: RecSenhaComponent;
  let fixture: ComponentFixture<RecSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
