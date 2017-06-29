/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'nga-sidebar-test-three',
  styles: [
      `
      :host /deep/ nga-layout-column {
        background-color: #76ecff;
      }
    `,
  ],
  template: `
    <nga-layout>
      
      <nga-layout-header></nga-layout-header>
      
      <nga-sidebar state="collapsed">
        Left
      </nga-sidebar>
      
      <nga-sidebar state="compacted" fixed right>
        Right
      </nga-sidebar>
      
      <nga-layout-footer></nga-layout-footer>
    
    </nga-layout>
  `,
} )
export class NgaSidebarTestThreeComponent {
}
