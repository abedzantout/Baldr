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
                <nga-button [role]="'primary'" [label]="'PRIMARY'">
                </nga-button>
                <nga-button [role]="'secondary'" [label]="'SECONDARY'">
                </nga-button>
                <nga-button [role]="'danger'" [label]="'DANGER'">
                </nga-button>
              </nga-layout-column>
             </nga-layout>`
})

export class NgaButtonsTestComponent {

}
