import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHomeComponent } from './template-home.component';

describe('TemplateHomeComponent', () => {
  let component: TemplateHomeComponent;
  let fixture: ComponentFixture<TemplateHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateHomeComponent]
    });
    fixture = TestBed.createComponent(TemplateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
