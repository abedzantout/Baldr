/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'nga-user-test',
  styles: [
      `
      .test-row {
        margin: 20px;
      }
    `,
  ],
  template: `
    <nga-layout id="layout-fluid">
      <nga-layout-header fixed>
        <nga-user showInitials size="medium" name="Abed Zantout" title="Worker"
                  [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
      </nga-layout-header>
      
      
      <nga-layout-column>
        <div class="test-row">
          <nga-user inverse></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse showInitials></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse size="large" name="Abed Zantout"></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse name="Abed Zantout" title="Worker"></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse size="small" name="Abed Zantout" title="Worker" showTitle="false"></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse onlyPicture size="medium" name="Abed Zantout" title="Worker"></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse size="medium" name="Abed Zantout" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse onlyPicture size="medium" name="Abed Zantout" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse size="large" picture="http://lorempixel.com/400/200/animals/"
                    name="Abed Zantout" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
        <div class="test-row">
          <nga-user inverse showInitials size="medium" name="Abed Zantout" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
      </nga-layout-column>
    </nga-layout>
  `,
} )
export class NgaUserTestComponent {
  
  contextMenu = [
    { title: 'Profile', link: 'some/link' },
    { title: 'Billing', target: '_blank', url: 'https://www.monopolykings.com' },
    { title: 'Exit', key: 'exit' },
  ];
  
  onMenuItemClick( event ) {
    console.info( event );
  }
}
