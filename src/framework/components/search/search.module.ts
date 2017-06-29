/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';
import { NgaSearchComponent, NgaSearchFieldComponent } from './search.component';
import { NgaSuperSearchService } from './search.service';

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    NgaSearchComponent,
    NgaSearchFieldComponent,
  ],
  exports: [
    NgaSearchComponent,
    NgaSearchFieldComponent,
  ],
  providers: [
    NgaSuperSearchService,
  ],
  entryComponents: [
    NgaSearchFieldComponent,
  ],
} )
export class NgaSearchModule {
}
