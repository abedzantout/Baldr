/**
 * Created by Lenovo on 27-Jun-17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './components/overview/Introduction/introduction.component';
import { codeGuidelinesComponent } from './components/overview/code-guidelines/code-guidelines.component';

const routes: Routes = [
  {path:'',redirectTo:'introduction',pathMatch:'full'},
  {path:'introduction',component: IntroductionComponent},
  {path:'code-guidelines',component: codeGuidelinesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule{

}
