import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUserComponent } from './blog-user.component';

describe('BlogUserComponent', () => {
  let component: BlogUserComponent;
  let fixture: ComponentFixture<BlogUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
