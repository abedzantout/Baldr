/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaMenuComponent, NgaMenuItemComponent } from './menu.component';
import { NgaMenuInternalService, NgaMenuOptions, ngaMenuOptionsToken, NgaMenuService } from './menu.service';

const ngaMenuComponents = [
  NgaMenuComponent,
  NgaMenuItemComponent,
];

const NGA_MENU_PROVIDERS = [
  NgaMenuService,
  NgaMenuInternalService,
];

@NgModule( {
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...ngaMenuComponents,
  ],
  exports: [
    ...ngaMenuComponents,
  ],
} )
export class NgaMenuModule {
  static forRoot( ngaMenuOptions?: NgaMenuOptions ): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaMenuModule,
      providers: [
        ...NGA_MENU_PROVIDERS,
        { provide: ngaMenuOptionsToken, useValue: ngaMenuOptions },
      ],
    };
  }
}
