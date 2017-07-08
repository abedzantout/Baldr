/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementsPageComponent } from './form-elements-page.component';

describe('FormElementsPageComponent', () => {
  let component: FormElementsPageComponent;
  let fixture: ComponentFixture<FormElementsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElementsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
