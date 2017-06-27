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

@NgModule({
  declarations: [
    AppComponent,
    sideNavComponent,
    IntroductionComponent,
    codeGuidelinesComponent
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
