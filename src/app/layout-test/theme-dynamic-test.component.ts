/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

import { NgaThemeService } from '../../framework/services/theme.service';

@Component( {
  selector: 'nga-dynamic-to-add',
  template: `
    <div>
      <strong>hello from dynamically inserted component</strong>
    </div>
  `,
} )
export class NgaDynamicToAddComponent {
}

@Component( {
  selector: 'nga-dynamic-test',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a href="#" class="navbar-brand">MonopolyKings</a>
        <button id="add-dynamic" (click)="addDynamicComponent()">Add Dynamic Component</button>
        <button id="clear-dynamic" (click)="clearDynamicComponents()">Clear Dynamic Components</button>
      </nga-layout-header>
      
      <nga-sidebar right>
        <nga-sidebar-content>
          Sidebar content
        </nga-sidebar-content>
      </nga-sidebar>
      
      <nga-layout-column>
        <nga-card>
          <nga-card-header>Hello</nga-card-header>
          <nga-card-body>
            Some Test content
          </nga-card-body>
        </nga-card>
      </nga-layout-column>
      
      
      <nga-layout-footer fixed>
        &copy; MonopolyKings 2017
      </nga-layout-footer>
    </nga-layout>
  `,
} )
export class NgaThemeDynamicTestComponent {
  
  constructor( private themeService: NgaThemeService ) { }
  
  addDynamicComponent() {
    this.themeService.appendToLayoutTop( NgaDynamicToAddComponent )
        .subscribe( cRef => console.info( cRef ) );
  }
  
  clearDynamicComponents() {
    this.themeService.clearLayoutTop()
        .subscribe( res => console.info( res ) );
  }
}
