/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeGuidelinesPageComponent } from './pages/code-guidelines-page/code-guidelines-page.component';
import { StyleGuideComponent } from './styleguide.component';

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
            path: 'code-guidelines',
            component: CodeGuidelinesPageComponent,
            outlet: 'pages',
          }
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
