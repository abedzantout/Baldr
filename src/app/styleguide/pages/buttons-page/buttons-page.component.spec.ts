/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPageComponent } from './buttons-page.component';

describe('ButtonsPageComponent', () => {
  let component: ButtonsPageComponent;
  let fixture: ComponentFixture<ButtonsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
