/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';
import { NgaThemeService } from '../../framework';

@Component( {
  selector: 'nga-change-theme-test',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a href="#" class="navbar-brand">MonopolyKings</a>
        <button id="change-theme" (click)="changeTheme()">Change Theme</button>
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
export class NgaThemeChangeTestComponent {

  currentTheme = 'default';

  constructor( private themeService: NgaThemeService ) { }

  changeTheme() {
    this.currentTheme = this.currentTheme === 'default' ? 'blue' : 'default';
    this.themeService.changeTheme( this.currentTheme );
  }
}
