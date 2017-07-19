/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaNumberInputComponent } from './number-input.component';

const NGA_NUMBER_INPUT_COMPONENTS = [
  NgaNumberInputComponent
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_NUMBER_INPUT_COMPONENTS,
  ],
  exports: [
    ...NGA_NUMBER_INPUT_COMPONENTS,
  ],
} )
export class NgaNumberInputModule {
}
