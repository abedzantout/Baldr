/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import {NgModule} from '@angular/core';

import {NgaSharedModule} from '../shared/shared.module';

import {NgaButtonComponent, NgaButtonBodyComponent} from './button.component';

const NGA_BUTTON_COMPONENTS = [
  NgaButtonComponent,
  NgaButtonBodyComponent
];


@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_BUTTON_COMPONENTS,
  ],
  exports: [
    ...NGA_BUTTON_COMPONENTS,
  ],
})
export class NgaButtonModule {
}

