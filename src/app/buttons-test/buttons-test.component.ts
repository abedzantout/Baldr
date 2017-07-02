/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'buttons-test',
  template: `<nga-layout>
              <nga-layout-column>
              <button class="btn btn-primary">button</button>
              <button class="btn btn-secondary">button</button>
              <button class="btn btn-danger">button</button>
              </nga-layout-column>
             </nga-layout>`
})

export class NgaButtonsTestComponent {
}
