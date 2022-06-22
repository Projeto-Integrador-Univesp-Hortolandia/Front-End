import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNewsComponent } from './feed-news.component';

describe('FeedNewsComponent', () => {
  let component: FeedNewsComponent;
  let fixture: ComponentFixture<FeedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
