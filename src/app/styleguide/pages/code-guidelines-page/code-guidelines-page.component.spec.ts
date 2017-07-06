import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGuidelinesPageComponent } from './code-guidelines-page.component';

describe('CodeGuidelinesPageComponent', () => {
  let component: CodeGuidelinesPageComponent;
  let fixture: ComponentFixture<CodeGuidelinesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGuidelinesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGuidelinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
