/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector:'nga-number-input',
  template: `
    <ng-content></ng-content>
    <input type="number"><div><span></span><span></span></div>
  `,
  styleUrls: ['./card.component.scss']
})

export class NgaNumberInputComponent{

  static readonly STATUS_DISABLED = 'disabled';

  status: string;


  @HostBinding( 'class.enabled' )
  private get enabled() {
    return this.status !== NgaNumberInputComponent.STATUS_DISABLED;
  }

  @HostBinding( 'class.disabled' )
  private get disabled() {
    return this.status === NgaNumberInputComponent.STATUS_DISABLED;
  }

  @Input( 'status' )
  private set setStatus( val: string ) {
    this.status = val;
  }
}
