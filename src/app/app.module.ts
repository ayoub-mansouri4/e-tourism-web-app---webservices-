import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"
import { WeatherItemComponent, WeatherListComponent, WeatherSearchComponent } from './meteo/weather';
import { MeteoComponent } from './meteo/mainComponent/meteo/meteo.component';



  @NgModule({
    imports: [BrowserModule, AppRoutingModule,FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [
      AppComponent,
      WeatherItemComponent,
      WeatherListComponent,
      WeatherSearchComponent,
      MeteoComponent],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
