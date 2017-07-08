/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaLayoutModule } from '../../framework/components/layout/layout.module';

import { SideNavComponent } from './side-nav/side-nav.component';

import { StyleGuideRoutingModule } from './styleguide-routing.module';
import { CodeGuidelinesPageComponent } from './pages/code-guidelines-page/code-guidelines-page.component';
import { StyleGuideComponent } from './styleguide.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';

@NgModule( {
  imports: [
    CommonModule,
    StyleGuideRoutingModule,
    NgaLayoutModule,
  ],
  declarations: [
    SideNavComponent,
    CodeGuidelinesPageComponent,
    StyleGuideComponent,
    IntroductionPageComponent,
    ButtonsPageComponent,
    TypographyPageComponent,
  ],
  exports: [
    StyleGuideRoutingModule,
    SideNavComponent,
    CodeGuidelinesPageComponent,
    IntroductionPageComponent,
    ButtonsPageComponent,

  ]
} )
export class StyleGuideModule {
}
