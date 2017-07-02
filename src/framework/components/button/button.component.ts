/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import {Component, HostBinding, Input} from '@angular/core';

/**
 * This is the main button component.
 */
@Component({
  selector: 'nga-button',
  styleUrls: ['./button.component.scss'],
  template: `<ng-content></ng-content>
             <button>BUTTON</button>
`,

})

export class NgaButtonComponent {

  static readonly TYPE_PRIMARY = 'primary';
  static readonly TYPE_SECONDARY = 'secondary';
  static readonly TYPE_DANGER = 'danger';

  role: string;

  @HostBinding('class.primary-button')
  private get primary() {
    return this.role === NgaButtonComponent.TYPE_PRIMARY;
  }

  @HostBinding('class.secondary-button')
  private get secondary() {
    return this.role === NgaButtonComponent.TYPE_SECONDARY;
  }

  @HostBinding('class.danger-button')
  private get danger() {
    return this.role === NgaButtonComponent.TYPE_DANGER;
  }

  @Input('role')
  private set setRole(val: string) {
    this.role = val;
  }

}
