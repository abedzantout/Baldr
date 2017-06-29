/**
 * Created by Lenovo on 27-Jun-17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './components/overview/Introduction/introduction.component';
import { codeGuidelinesComponent } from './components/overview/code-guidelines/code-guidelines.component';
import { buttonsPageComponent } from './components/components-page/buttons/buttons.component';
import { FormElementsComponent } from './components/components-page/form-elements/form-elements.component';
import { GridComponent } from './components/components-page/grid/grid.component';
import { ListsComponent } from './components/components-page/lists/lists.component';
import { ColorSchemeComponent } from './components/design/color-scheme/color-scheme.component';
import { TypographyComponent } from './components/design/typography/typography.component';
import { BorderComponent } from './components/design/border/border.component';
import { BoxShadowComponent } from './components/design/box-shadow/box-shadow.component';
import { LayoutComponent } from './components/design/layout/layout.component';
import { IconsComponent } from './components/design/icons/icons.component';

const routes: Routes = [
  {path:'',redirectTo:'introduction',pathMatch:'full'},
  {path:'introduction',component: IntroductionComponent},
  {path:'code-guidelines',component: codeGuidelinesComponent},
  {path:'buttons',component: buttonsPageComponent},
  {path:'form-elements',component: FormElementsComponent},
  {path:'grid',component: GridComponent},
  {path:'lists',component: ListsComponent},
  {path:'color-scheme',component: ColorSchemeComponent},
  {path:'typography',component: TypographyComponent},
  {path:'borders',component: BorderComponent},
  {path:'box-shadows',component: BoxShadowComponent},
  {path:'layout',component: LayoutComponent},
  {path:'icons',component: IconsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule{

}
