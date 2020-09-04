import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai01mauComponent } from './bai01mau/bai01mau.component';
import { Bai01Component } from './bai01/bai01.component';
import { Bai02Component } from './bai02/bai02.component';
import { Bai06Component } from './bai06/bai06.component';
import { Bai03Component } from './bai03/bai03.component';
import { Bai08Component } from './bai08/bai08.component';
import { Bai04Component } from './bai04/bai04.component';
import { Bai05Component } from './bai05/bai05.component';
import { Bai07Component } from './bai07/bai07.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai01mauComponent,
    Bai01Component,
    Bai02Component,
    Bai06Component,
    Bai03Component,
    Bai08Component,
    Bai04Component,
    Bai05Component,
    Bai07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
