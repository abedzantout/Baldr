/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { convertToBoolProperty } from '../helpers';

@Component( {
  selector: 'nga-route-tabset',
  styleUrls: ['./route-tabset.component.scss'],
  template: `
    <ul>
      <li *ngFor="let tab of tabs"
          (click)="$event.preventDefault(); selectTab(tab)"
          routerLink="{{tab.route}}"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
        <a href>{{tab.title}}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
} )
export class NgaRouteTabsetComponent {
  
  @HostBinding( 'class.full-width' ) fullWidthValue: boolean = false;
  
  @Input() tabs: any[];
  
  @Input()
  set fullWidth( val: boolean ) {
    this.fullWidthValue = convertToBoolProperty( val );
  }
  
  @Output() changeTab = new EventEmitter<any>();
  
  constructor( private router: Router ) {
  }
  
  selectTab( tab: any ) {
    this.changeTab.emit( tab );
    
    this.router.navigate( [tab.route] );
  }
}
