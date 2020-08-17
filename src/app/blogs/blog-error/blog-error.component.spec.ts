import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogErrorComponent } from './blog-error.component';

describe('BlogErrorComponent', () => {
  let component: BlogErrorComponent;
  let fixture: ComponentFixture<BlogErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
