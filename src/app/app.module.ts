import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDefaultComponent } from './components/molecules/navbar-default/navbar-default.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { ButtonPlusComponent } from './components/atoms/button-plus/button-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDefaultComponent,
    LogoComponent,
    ButtonPlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
