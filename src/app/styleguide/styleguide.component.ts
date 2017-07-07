/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component,ViewEncapsulation } from '@angular/core';

@Component( {
  selector: 'style-guide',
  template: `
<nga-layout>
  <nga-layout-column>
    <div class="row">
      <side-nav class="col-4"></side-nav>
      <div class="col-8">
        <router-outlet name="pages"></router-outlet>
      </div>
    </div>
  </nga-layout-column>
</nga-layout>

  `,
  styleUrls: ['./styleguide.component.scss','./styleguide.styles.scss'],
  encapsulation: ViewEncapsulation.None,
} )

export class StyleGuideComponent {
}
