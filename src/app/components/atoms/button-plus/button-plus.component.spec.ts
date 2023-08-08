import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlusComponent } from './button-plus.component';

describe('ButtonPlusComponent', () => {
  let component: ButtonPlusComponent;
  let fixture: ComponentFixture<ButtonPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPlusComponent]
    });
    fixture = TestBed.createComponent(ButtonPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
