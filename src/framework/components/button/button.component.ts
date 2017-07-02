/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import {Component, HostBinding, Input} from '@angular/core';

/**
 * Component intended to act as the body of the button.
 */
@Component({
  selector: 'nga-button-body',
  template: `
<ng-content></ng-content>
<h1>HIIIIIIIIIII</h1>`,
})

export class NgaButtonBodyComponent {
}

/**
 * This is the main button component. It contains all other button sub-components.
 */
@Component({
  selector: 'nga-button',
  styleUrls: ['./button.component.scss'],
  template: `<ng-content></ng-content>
<button>HII</button>
<ng-content  select="nga-button-body"></ng-content>`,

})

export class NgaButtonComponent {

  static readonly TYPE_PRIMARY = 'primary';

  role: string;

  @HostBinding('class.primary-button')
  private get primary() {
    return this.role === NgaButtonComponent.TYPE_PRIMARY;
  }

  @Input('role')
  private set setRole(val: string) {
    this.role = val;
  }

}
