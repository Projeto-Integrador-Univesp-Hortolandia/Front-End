import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorComponent } from './content-creator.component';

describe('ContentCreatorComponent', () => {
  let component: ContentCreatorComponent;
  let fixture: ComponentFixture<ContentCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
