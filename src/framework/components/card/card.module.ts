/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaCardBodyComponent, NgaCardComponent, NgaCardFooterComponent, NgaCardHeaderComponent, NgaCardSideComponent } from './card.component';

const NGA_CARD_COMPONENTS = [
  NgaCardComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
  NgaCardHeaderComponent,
  NgaCardSideComponent,
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_CARD_COMPONENTS,
  ],
  exports: [
    ...NGA_CARD_COMPONENTS,
  ],
} )
export class NgaCardModule {
}
