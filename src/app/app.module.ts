import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HotelComponent } from './hotel/hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LieuTouriComponent } from './lieu-touri/lieu-touri.component';
import { AddLieuTouriComponent } from './add-lieu-touri/add-lieu-touri.component';
import { ChambreComponent } from './chambre/chambre.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import {Router, Routes} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    AddHotelComponent,
    LieuTouriComponent,
    AddLieuTouriComponent,
    ChambreComponent,
    AddChambreComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
