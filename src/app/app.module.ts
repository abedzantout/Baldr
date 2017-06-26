import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { sideNavComponent } from './components/side-nav/side-nav.component';
import { IntroductionComponent } from './components/overview/Introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    sideNavComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
