/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaUserComponent } from './user.component';

const NGA_USER_COMPONENTS = [
  NgaUserComponent,
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_USER_COMPONENTS,
  ],
  exports: [
    ...NGA_USER_COMPONENTS,
  ],
} )
export class NgaUserModule {
}
