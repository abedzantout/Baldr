/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StyleGuideComponent } from './styleguide.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { CodeGuidelinesPageComponent } from './pages/code-guidelines-page/code-guidelines-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { ColorSchemePageComponent } from './pages/color-scheme-page/color-scheme-page.component';
import { BorderPageComponent } from './pages/border-page/border-page.component';
import { BoxShadowPageComponent } from './pages/box-shadow-page/box-shadow-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { ChartsPageComponent } from './pages/charts-page/charts-page.component';
import { FormElementsPageComponent } from './pages/form-elements-page/form-elements-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

/**
 * there is a known bug with angular regarding aux routing in lazyLoaded submodules.
 * https://github.com/angular/angular/issues/10981
 * This is why we have this obscure routes structure.
 * TODO: fix this issue when Angular solve their bug.
 */
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pages',
        component: StyleGuideComponent,
        children:[
          {
            path: 'introduction',
            component: IntroductionPageComponent,
            outlet: 'pages'
          },
          {
            path: 'code-guidelines',
            component: CodeGuidelinesPageComponent,
            outlet: 'pages',
          },
          {
            path: 'buttons-page',
            component: ButtonsPageComponent,
            outlet: 'pages',
          },
          {
            path: 'typography-page',
            component: TypographyPageComponent,
            outlet: 'pages',
          },
          {
            path: 'color-scheme-page',
            component: ColorSchemePageComponent,
            outlet: 'pages',
          },
          {
            path: 'border-page',
            component: BorderPageComponent,
            outlet: 'pages',
          },
          {
            path: 'box-shadow-page',
            component: BoxShadowPageComponent,
            outlet: 'pages',
          },
          {
            path: 'icons-page',
            component: IconsPageComponent,
            outlet: 'pages',
          },
          {
            path: 'cards-page',
            component: CardsPageComponent,
            outlet: 'pages',
          },
          {
            path: 'charts-page',
            component: ChartsPageComponent,
            outlet: 'pages',
          },
          {
            path: 'form-elements-page',
            component: FormElementsPageComponent,
            outlet: 'pages',
          },
          {
            path: 'lists-page',
            component: ListsPageComponent,
            outlet: 'pages',
          },
          {
            path: 'map-page',
            component: MapPageComponent,
            outlet: 'pages',
          },
          {
            path: 'layout-page',
            component: LayoutPageComponent,
            outlet: 'pages',
          },
        ],
      },
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class StyleGuideRoutingModule {
}
