import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePostComponent } from './movie-post.component';

describe('MoviePostComponent', () => {
  let component: MoviePostComponent;
  let fixture: ComponentFixture<MoviePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
