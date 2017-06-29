/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaTabComponent, NgaTabsetComponent } from './tabset.component';

const NGA_TABSET_COMPONENTS = [
  NgaTabsetComponent,
  NgaTabComponent,
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_TABSET_COMPONENTS,
  ],
  exports: [
    ...NGA_TABSET_COMPONENTS,
  ],
} )
export class NgaTabsetModule {
}
