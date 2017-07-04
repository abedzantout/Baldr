/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavComponent } from './side-nav/side-nav.component';


import { StyleguideRoutingModule } from './styleguide-routing.module';


@NgModule({
  imports: [
    CommonModule,
    StyleguideRoutingModule,
  ],
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent
  ]
})
export class StyleGuideModule { }
