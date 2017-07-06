/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgaLayoutModule } from '../../framework/components/layout/layout.module';

import { SideNavComponent } from './side-nav/side-nav.component';


import { StyleguideRoutingModule } from './styleguide-routing.module';
import { CodeGuidelinesPageComponent } from './pages/code-guidelines-page/code-guidelines-page.component';


@NgModule({
  imports: [
    CommonModule,
    StyleguideRoutingModule,
    NgaLayoutModule,
  ],
  declarations: [
    SideNavComponent,
    CodeGuidelinesPageComponent
  ],
  exports: [
    StyleguideRoutingModule,
    SideNavComponent,
    CodeGuidelinesPageComponent

  ]
})
export class StyleGuideModule { }
