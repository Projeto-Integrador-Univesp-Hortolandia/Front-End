import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoCreateComponent } from './aviso-create.component';

describe('AvisoCreateComponent', () => {
  let component: AvisoCreateComponent;
  let fixture: ComponentFixture<AvisoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
