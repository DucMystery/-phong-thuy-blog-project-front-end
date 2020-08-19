import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsCategoryComponent } from './blogs-category.component';

describe('BlogsCategoryComponent', () => {
  let component: BlogsCategoryComponent;
  let fixture: ComponentFixture<BlogsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
