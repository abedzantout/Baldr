/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

import { NgaThemeService } from '../../framework/services/theme.service';
import { NgaThemeBreakpointsService } from '../../framework/services/breakpoints.service';


@Component( {
  selector: 'nga-breakpoint-test',
  template: `
      <nga-layout>
          <nga-layout-header fixed>
              <a href="#" class="navbar-brand">Akveo</a>
          </nga-layout-header>
          <nga-layout-column>
              <nga-card>
                  <nga-card-header>Breakpoint</nga-card-header>
                  <nga-card-body>
                      <p>Resize the window to the next/prev breakpoint to see the change</p>
                      <div> Prev breakpoint : <strong>{{ change[ 0 ]?.name }} ({{ change[ 0 ]?.width }})</strong></div>
                      <div> Current breakpoint : <strong>{{ change[ 1 ]?.name }} ({{ change[ 1 ]?.width }})</strong>
                      </div>
                  </nga-card-body>
              </nga-card>
          </nga-layout-column>
          <nga-layout-footer fixed>
              &copy; Akveo 2017
          </nga-layout-footer>
      </nga-layout>
  `,
} )
export class NgaThemeBreakpointTestComponent {

  change: any = [];

  constructor( private themeService: NgaThemeService ) {
    this.themeService.onMediaQueryChange()
      .subscribe( ( change: any ) => {
        this.change = change;
      } );
  }
}
