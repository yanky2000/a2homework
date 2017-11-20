import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HotelsService } from './common/services/hotels.service';
import { LeisureService } from './common/services/leisure.service';
import { HotelsModule } from './hotels/hotels.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HotelsModule,
    MaterialModule],

  providers: [
    HotelsService,
    LeisureService

  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
