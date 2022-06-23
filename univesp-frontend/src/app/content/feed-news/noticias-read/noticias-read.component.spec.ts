import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasReadComponent } from './noticias-read.component';

describe('NoticiasReadComponent', () => {
  let component: NoticiasReadComponent;
  let fixture: ComponentFixture<NoticiasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
