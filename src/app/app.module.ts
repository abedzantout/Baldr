//core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routing modules
import { RoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { sideNavComponent } from './components/side-nav/side-nav.component';
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

@NgModule({
  declarations: [
    AppComponent,
    sideNavComponent,
    IntroductionComponent,
    codeGuidelinesComponent,
    buttonsPageComponent,
    FormElementsComponent,
    GridComponent,
    ListsComponent,
    ColorSchemeComponent,
    TypographyComponent,
    BorderComponent,
    BoxShadowComponent,
    LayoutComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
