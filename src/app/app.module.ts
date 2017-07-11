/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { List } from 'immutable';

import { NgaMenuItem, NgaSearchModule, NgaThemeModule } from '../framework/';
import { NgaCardModule } from '../framework/components/card/card.module';
import { NgaLayoutModule } from '../framework/components/layout/layout.module';
import { NgaMenuModule } from '../framework/components/menu/menu.module';
import { NgaRouteTabsetModule } from '../framework/components/route-tabset/route-tabset.module';
import { NgaSidebarModule } from '../framework/components/sidebar/sidebar.module';
import { NgaTabsetModule } from '../framework/components/tabset/tabset.module';
import { NgaUserModule } from '../framework/components/user/user.module';
import { NgaActionsModule } from '../framework/components/actions/actions.module';

import { NgaAppComponent } from './app.component';
import { NgaLayoutTestComponent } from './layout-test/layout-test.component';
import { NgaLayoutHeaderTestComponent } from './layout-test/layout-header-test.component';
import { NgaLayoutFooterTestComponent } from './layout-test/layout-footer-test.component';
import { NgaThemeChangeTestComponent } from './layout-test/theme-change-test.component';
import { NgaTabsetTestComponent } from './tabset-test/tabset-test.component';
import {
  NgaRouteTabsetTestChild1Component, NgaRouteTabsetTestChild2Component, NgaRouteTabsetTestComponent
} from './route-tabset-test/route-tabset-test.component';

import { NgaSidebarTestComponent } from './sidebar-test/sidebar-test.component';
import { NgaSidebarTestOneComponent } from './sidebar-test/sidebar-test-one.component';
import { NgaSidebarTestTwoComponent } from './sidebar-test/sidebar-test-two.component';
import { NgaSidebarTestThreeComponent } from './sidebar-test/sidebar-test-three.component';
import {
  NgaMenuItem1Component, NgaMenuItem2Component, NgaMenuItem31Component, NgaMenuItem32Component,
  NgaMenuItem331Component, NgaMenuItem332Component, NgaMenuItem33Component, NgaMenuItem3Component,
  NgaMenuItem4Component, NgaMenuTestComponent
} from './menu-test/menu-test.component';
import { NgaUserTestComponent } from './user-test/user-test.component';
import { NgaDynamicToAddComponent, NgaThemeDynamicTestComponent } from './layout-test/theme-dynamic-test.component';
import { NgaActionsTestComponent } from './actions-test/actions-test.component';
import { NgaBootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';

import { routes } from './app.routes';

import { NgaSearchTestComponent } from './search-test/search-test.component';
import { NgaFormsTestComponent } from './forms-test/forms-test.component';

import { SpinnerTest } from 'app/spinner-test/spinner-test.component';

const NGA_TEST_COMPONENTS = [
  NgaAppComponent,
  NgaLayoutTestComponent,
  NgaLayoutHeaderTestComponent,
  NgaLayoutFooterTestComponent,
  NgaTabsetTestComponent,
  NgaSidebarTestComponent,
  NgaSidebarTestOneComponent,
  NgaSidebarTestTwoComponent,
  NgaSidebarTestThreeComponent,
  NgaRouteTabsetTestComponent,
  NgaRouteTabsetTestChild1Component,
  NgaRouteTabsetTestChild2Component,
  NgaMenuTestComponent,
  NgaMenuItem1Component,
  NgaMenuItem2Component,
  NgaMenuItem3Component,
  NgaMenuItem31Component,
  NgaMenuItem32Component,
  NgaMenuItem33Component,
  NgaMenuItem331Component,
  NgaMenuItem332Component,
  NgaMenuItem4Component,
  NgaUserTestComponent,
  NgaThemeChangeTestComponent,
  NgaSearchTestComponent,
  NgaBootstrapTestComponent,
  NgaDynamicToAddComponent,
  NgaThemeDynamicTestComponent,
  NgaActionsTestComponent,
  NgaFormsTestComponent,
  SpinnerTest,
];

@NgModule( {
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes, { useHash: false } ),
    NgaThemeModule.forRoot( { name: 'hodyr' } ),
    NgaCardModule,
    NgaLayoutModule,
    NgaMenuModule.forRoot( {
      items: List<NgaMenuItem>( [{
        title: 'Menu #4',
        link: '/menu/4',
        icon: 'ion ion-ionic',
      }, {
        title: 'Menu #5',
        icon: 'ion ion-ionic',
      }] ),
    } ),
    NgaRouteTabsetModule,
    NgaSidebarModule.forRoot(),
    NgaTabsetModule,
    NgaUserModule,
    NgaSearchModule,
    NgaActionsModule,
  ],
  declarations: [
    ...NGA_TEST_COMPONENTS,
  ],
  entryComponents: [
    NgaDynamicToAddComponent,
  ],
  providers: [],
  bootstrap: [NgaAppComponent],
} )
export class AppModule {
}
