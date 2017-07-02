/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import {NgModule} from '@angular/core';

import {NgaSharedModule} from '../shared/shared.module';

import {NgaButtonComponent} from './button.component';


@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    NgaButtonComponent,
  ],
  exports: [
    NgaButtonComponent,
  ]
})
export class NgaButtonModule {
}

