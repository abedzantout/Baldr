/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'nga-layout-footer-test',
  template: `
      <nga-layout>
          <nga-layout-footer fixed>
              &copy; MonopolyKings 2017
          </nga-layout-footer>
      </nga-layout>
  `,
} )
export class NgaLayoutFooterTestComponent {
}
