/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'style-guide',
  template: `
    <nga-layout>
      <nga-sidebar>
        <side-nav></side-nav>
      </nga-sidebar>
      <nga-layout-column>
        <router-outlet name="pages"></router-outlet>
      </nga-layout-column>
    </nga-layout>
  `,
  styleUrls: ['./styleguide.component.scss', './styleguide.styles.scss'],
} )

export class StyleGuideComponent {
}
