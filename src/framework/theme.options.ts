/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { InjectionToken } from '@angular/core';

export interface NgaThemeOptions {
  name: string;
}

export const ngaThemeOptionsToken = new InjectionToken<NgaThemeOptions>( 'NGA_THEME_OPTIONS' );
