/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaLayoutModule } from '../../framework/components/layout/layout.module';
import { NgaCardModule } from '../../framework/components/card/card.module';
import { NgaSidebarModule } from '../../framework/components/sidebar/sidebar.module';
import { NgaThemeModule } from '../../framework/theme.module';
import { NgaNumberInputModule } from '../../framework/components/number-input/number-input.module';

import { SideNavComponent } from './side-nav/side-nav.component';

import { StyleGuideRoutingModule } from './styleguide-routing.module';
import { CodeGuidelinesPageComponent } from './pages/code-guidelines-page/code-guidelines-page.component';
import { StyleGuideComponent } from './styleguide.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { ColorSchemePageComponent } from './pages/color-scheme-page/color-scheme-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { FormElementsPageComponent } from './pages/form-elements-page/form-elements-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule( {
  imports: [
    CommonModule,
    StyleGuideRoutingModule,
    NgaSidebarModule.forRoot(),
    NgaThemeModule.forRoot( { name: 'hodyr' } ),
    NgaLayoutModule,
    NgaCardModule,
    NgaNumberInputModule,
  ],
  declarations: [
    SideNavComponent,
    CodeGuidelinesPageComponent,
    StyleGuideComponent,
    IntroductionPageComponent,
    ButtonsPageComponent,
    TypographyPageComponent,
    ColorSchemePageComponent,
    IconsPageComponent,
    CardsPageComponent,
    ChartsPageComponent,
    FormElementsPageComponent,
    ListsPageComponent,
    MapPageComponent,
    LayoutPageComponent,
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
