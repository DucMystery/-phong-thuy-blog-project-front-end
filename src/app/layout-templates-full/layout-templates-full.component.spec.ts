import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTemplatesFullComponent } from './layout-templates-full.component';

describe('LayoutTemplatesFullComponent', () => {
  let component: LayoutTemplatesFullComponent;
  let fixture: ComponentFixture<LayoutTemplatesFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTemplatesFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTemplatesFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
