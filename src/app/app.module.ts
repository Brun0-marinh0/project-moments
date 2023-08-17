import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDefaultComponent } from './components/molecules/navbar-default/navbar-default.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { ButtonPlusComponent } from './components/atoms/button-plus/button-plus.component';
import { TemplateHomeComponent } from './components/templates/template-home/template-home.component';
import { FrameComponent } from './components/organisms/frame/frame.component';
import { AddComponent } from './components/pages/add/add.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TemplateFormComponent } from './components/templates/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDefaultComponent,
    LogoComponent,
    ButtonPlusComponent,
    TemplateHomeComponent,
    FrameComponent,
    AddComponent,
    HomeComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
