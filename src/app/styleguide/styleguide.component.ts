/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'style-guide',
  template: `
    <div class="row">
      <side-nav class="col-4"></side-nav>
      <div class="col-8">
        <router-outlet name="pages"></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./styleguide.component.scss']
} )

export class StyleGuideComponent {
}
