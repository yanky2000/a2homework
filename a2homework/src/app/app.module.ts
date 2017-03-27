import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HotelsModule } from './hotels/hotels.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HotelsModule,
    MaterialModule],

  bootstrap: [AppComponent]
})

export class AppModule { }
