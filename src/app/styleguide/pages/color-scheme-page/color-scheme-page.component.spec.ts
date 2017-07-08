/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSchemePageComponent } from './color-scheme-page.component';

describe('ColorSchemePageComponent', () => {
  let component: ColorSchemePageComponent;
  let fixture: ComponentFixture<ColorSchemePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSchemePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSchemePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
