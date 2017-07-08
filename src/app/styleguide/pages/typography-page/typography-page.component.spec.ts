/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyPageComponent } from './typography-page.component';

describe('TypographyPageComponent', () => {
  let component: TypographyPageComponent;
  let fixture: ComponentFixture<TypographyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
