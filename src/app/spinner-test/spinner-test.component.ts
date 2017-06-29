/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';
import { NgaSpinnerService } from '../../framework/services/spinner.service';

//TODO: create spinner
@Component( {
  selector: 'nga-spinner-test',
  template: `
    <nga-layout>
      <nga-layout-column>
        <button (click)="loadSpinner()" class="btn btn-primary">Load Spinner</button>
      </nga-layout-column>
    </nga-layout>
    <div id="nga-global-spinner">
    </div>
  `,
} )
export class SpinnerTest {
  constructor( private spinnerService: NgaSpinnerService ) {
  }
  
  loadSpinner() {
    this.spinnerService.load();
  }
}
