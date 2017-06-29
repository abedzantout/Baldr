/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaLayoutColumnComponent, NgaLayoutComponent, NgaLayoutFooterComponent, NgaLayoutHeaderComponent } from './layout.component';

const NGA_LAYOUT_COMPONENTS = [
  NgaLayoutComponent,
  NgaLayoutColumnComponent,
  NgaLayoutFooterComponent,
  NgaLayoutHeaderComponent,
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
  exports: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
} )
export class NgaLayoutModule {
}
