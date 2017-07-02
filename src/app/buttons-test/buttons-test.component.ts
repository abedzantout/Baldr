/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'nga-buttons-test',
  template: `<nga-layout>
              <nga-layout-column>
                <nga-button [role]="'primary'">
                </nga-button>
                <nga-button [role]="'secondary'">
                </nga-button>
                <nga-button [role]="'danger'">
                </nga-button>
              </nga-layout-column>
             </nga-layout>`
})

export class NgaButtonsTestComponent {

}
