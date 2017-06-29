/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaActionComponent, NgaActionsComponent } from './actions.component';

const NGA_ACTIONS_COMPONENTS = [
  NgaActionComponent,
  NgaActionsComponent,
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_ACTIONS_COMPONENTS,
  ],
  exports: [
    ...NGA_ACTIONS_COMPONENTS,
  ],
} )
export class NgaActionsModule {
}
