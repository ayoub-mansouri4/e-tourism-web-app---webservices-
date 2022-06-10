import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherTransportsComponent } from './components/afficher-transports/afficher-transports.component';
import { TransportItemComponent } from './components/transport-item/transport-item.component';
import {HttpClientModule} from  '@angular/common/http';
import { MesReservationsComponent } from './components/mes-reservations/mes-reservations.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { WeatherItemComponent, WeatherSearchComponent } from './meteo/weather';
import { MeteoComponent } from './meteo/mainComponent/meteo/meteo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AfficherTransportsComponent,
    TransportItemComponent,
    MesReservationsComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    WeatherItemComponent,
    WeatherSearchComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule, //
    HttpClientModule,//
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
