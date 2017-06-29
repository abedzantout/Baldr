/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'nga-route-tabset-test-child1',
  template: `<h1>Child 1</h1>`,
} )
export class NgaRouteTabsetTestChild1Component {
}

@Component( {
  selector: 'nga-route-tabset-test-child2',
  template: `<h1>Child 2</h1>`,
} )
export class NgaRouteTabsetTestChild2Component {
}

@Component( {
  selector: 'nga-route-tabset-test',
  template: `
      <nga-layout>
          <nga-layout-column>
              <nga-route-tabset [tabs]="tabs"></nga-route-tabset>
              <nga-route-tabset [tabs]="tabs" fullWidth></nga-route-tabset>
          </nga-layout-column>
      </nga-layout>
  `,
} )
export class NgaRouteTabsetTestComponent {
  tabs: any[] = [
    {
      title: 'Tab #1',
      route: '/route-tabset/tab1',
    },
    {
      title: 'Tab #2',
      route: '/route-tabset/tab2',
    },
  ];
}
