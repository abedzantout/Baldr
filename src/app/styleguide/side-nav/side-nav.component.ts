/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
} )

export class SideNavComponent {
  private accordionClasses: any;

  constructor() {
    this.accordionClasses = [
      {
        name: 'collapseOverview',
        classes: { 'collapse': true, 'show': false },
        chevron: { 'icon': true, 'ion-chevron-down': true, 'ion-chevron-up': false }
      },
      {
        name: 'collapseDesign',
        classes: { 'collapse': true, 'show': false },
        chevron: { 'icon': true, 'ion-chevron-down': true, 'ion-chevron-up': false }
      },
      {
        name: 'collapseComponents',
        classes: { 'collapse': true, 'show': false },
        chevron: { 'icon': true, 'ion-chevron-down': true, 'ion-chevron-up': false }
      },
      {
        name: 'collapseUtility',
        classes: { 'collapse': true, 'show': false },
        chevron: { 'icon': true, 'ion-chevron-down': true, 'ion-chevron-up': false }
      }
    ]
  }

  openPanel( panel: string ) {
    this.accordionClasses.forEach( ( item ) => {
      if ( item.name == panel && item.classes.show == false ) {
        item.classes.show                = true;
        item.chevron['ion-chevron-down'] = false;
        item.chevron['ion-chevron-up']   = true;
      }
      else {
        item.classes.show                = false;
        item.chevron['ion-chevron-down'] = true;
        item.chevron['ion-chevron-up']   = false;
      }
    } )

  }
}
