/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'nga-layout-header-test',
  template: `
      <nga-layout>
          <nga-layout-header fixed>
              <a class="navbar-brand" href="#">ngx-admin</a>
          </nga-layout-header>
      </nga-layout>
  `,
} )
export class NgaLayoutHeaderTestComponent {
}
