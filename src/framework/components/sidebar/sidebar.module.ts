/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaSidebarComponent, NgaSidebarContentComponent, NgaSidebarFooterComponent, NgaSidebarHeaderComponent } from './sidebar.component';

import { NgaSidebarService } from './sidebar.service';

const NGA_SIDEBAR_COMPONENTS = [
  NgaSidebarComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
  NgaSidebarHeaderComponent,
];

const NGA_SIDEBAR_PROVIDERS = [
  NgaSidebarService,
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_SIDEBAR_COMPONENTS,
  ],
  exports: [
    ...NGA_SIDEBAR_COMPONENTS,
  ],
} )
export class NgaSidebarModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaSidebarModule,
      providers: [
        ...NGA_SIDEBAR_PROVIDERS,
      ],
    };
  }
}
