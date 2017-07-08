/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/publish';

const builtInThemes = [
  {
    name: 'default',
    base: null,
    variables: {
      fontMain: 'SanFransisco',
      fontSecondary: 'Exo',

      colorBg: '#edf1f7',
      colorFg: '#d1d1ff',
      colorFgHeading: '#ffffff',
      colorFgHint: '#a1a1e5',
      colorFgHighlight: '#00f9a6',
      separator: '#d1d1ff',

      colorGray: 'rgba(81, 113, 165, 0.15)',
      colorNeutral: 'transparent',
      colorWhite: '#ffffff',
      colorDisabled: 'rgba(255, 255, 255, 0.4)',

      colorPrimary: '#a48aff',
      colorSuccess: '#00e172',
      colorInfo: '#4e9fff',
      colorWarning: '#e5c742',
      colorDanger: '#ff666d',

      layoutBg: '#edf1f7',
    },
  },
  {
    name: 'cosmic',
    base: 'default',
    variables: {
      colorBg: '#3d3780',
      colorFg: '#a1a1e5',

      separator: '#342e73',

      colorGray: 'rgba(81, 113, 165, 0.15)',
      colorNeutral: 'transparent',
      colorWhite: '#ffffff',

      colorPrimary: '#7659ff',
      colorSuccess: '#00d977',
      colorInfo: '#0088ff',
      colorWarning: '#e6b045',
      colorDanger: '#ff386a',

      layoutBg: '#2c2961',
    },
  },
  {
    name: 'light',
    base: 'default',
    variables: {
      colorBg: '#white',
      colorFg: '#2f3234',
    },
  },
];

@Injectable()
export class NgaThemeConfig {

  private themes: any = {};

  constructor() {
    builtInThemes.forEach( ( theme: any ) => {
      this.register( theme.variables, theme.name, theme.base );
    } );
  }

  register( config: any, themeName: string, baseTheme: string ) {
    const base             = this.has( baseTheme ) ? this.get( baseTheme ) : {};
    this.themes[themeName] = Object.assign( {}, base, config );
  }

  has( themeName: string ): boolean {
    return !!this.themes[themeName];
  }

  get( themeName: string ): any {
    if ( !this.themes[themeName] ) {
      throw Error( `NgaThemeConfig: no theme '${themeName}' found registered.` );
    }

    return Object.assign( {}, this.themes[themeName] );
  }
}
