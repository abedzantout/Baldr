/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component, OnInit } from '@angular/core';

import { NgaSidebarService } from '../../framework/components/sidebar/sidebar.service';

@Component( {
  selector: 'nga-sidebar-test',
  styles: [
      `
      :host /deep/ nga-layout-column {
        background-color: #76ecff;
      }
    `,
  ],
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a href="#" class="navbar-brand">MonopolyKings</a>
        
        <button id="collapse-left" (click)="collapseLeft()">Collapse Left</button>
        <button id="collapse-right" (click)="collapseRight()">Collapse Right</button>
      </nga-layout-header>
      
      <nga-sidebar state="collapsed" fixed tag="left">
      </nga-sidebar>
      
      <nga-sidebar right state="compacted" tag="right">
        {{ content }}
      </nga-sidebar>
      
      <nga-layout-column left>
        {{ content }}
      </nga-layout-column>
      <nga-layout-column>
        {{ content }}
      </nga-layout-column>
      <nga-layout-column>
        {{ content }}
      </nga-layout-column>
      
      
      <nga-layout-footer fixed>
        &copy; MonopolyKings 2017
      </nga-layout-footer>
    </nga-layout>
  `,
} )
export class NgaSidebarTestComponent implements OnInit {
  
  content = 'First ';
  
  constructor( private sidebarService: NgaSidebarService ) { }
  
  collapseLeft() {
    this.sidebarService.toggle( false, 'left' );
  }
  
  collapseRight() {
    this.sidebarService.toggle( true, 'right' );
  }
  
  ngOnInit() {
    
    for ( let i = 0; i < 1000; i++ ) {
      this.content += 'MonopolyKings ';
    }
    this.content += ' Last';
  }
}
