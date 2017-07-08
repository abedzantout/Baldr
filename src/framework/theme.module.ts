/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgaThemeOptions, ngaThemeOptionsToken } from './theme.options';
import { NgaThemeService } from './services/theme.service';
import { NgaSpinnerService } from './services/spinner.service';
import { NgaThemeConfig } from './services/themeConfig.service';

@NgModule( {
  imports: [
    CommonModule,
    NgbModule.forRoot(),
  ],
  exports: [
    NgbModule,
  ],
} )
export class NgaThemeModule {
  // TODO: check the options (throw exception?)
  static forRoot( ngaThemeOptions: NgaThemeOptions ): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
      imports: [
        NgbModule.forRoot(),
      ],
      exports: [
        NgbModule,
      ],
      providers: [
        { provide: ngaThemeOptionsToken, useValue: ngaThemeOptions || {} },
        NgaThemeConfig,
        NgaThemeService,
        NgaSpinnerService,
      ],
    };
  }
}
