/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

import 'style-loader!./app.themes.scss';

@Component( {
  selector: 'nga-app-root',
  template: `
    <router-outlet></router-outlet>`,
} )
export class NgaAppComponent {
}
