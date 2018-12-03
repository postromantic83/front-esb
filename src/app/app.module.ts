import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AutoCompleteModule, ButtonModule, CalendarModule, DropdownModule, PanelModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ScoutService} from './scout.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [ScoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
