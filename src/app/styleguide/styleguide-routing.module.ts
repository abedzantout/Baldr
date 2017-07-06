/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeGuidelinesPageComponent } from './pages/code-guidelines-page/code-guidelines-page.component';
import { StyleGuideComponent } from './styleguide.component';

const routes: Routes = [
  {
    path: '',
    component: StyleGuideComponent,
    children: [
      {
        path: 'code-guidelines',
        component: CodeGuidelinesPageComponent,
        outlet: 'pages',
      }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class StyleGuideRoutingModule {
}
