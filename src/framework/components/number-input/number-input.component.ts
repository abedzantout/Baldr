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
          <input type="number" value="15000">
    <div class="buttons-container">
      <span><i class="icon ion-android-add"></i></span>
      <span><i class="icon ion-android-remove"></i></span>
    </div>

  `,
  styleUrls: ['./number-input.component.scss']
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
