import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTransportComponent } from './components/home-transport/home-transport.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddTransportComponent } from './components/add-transport/add-transport.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';
import { DeleteTransportComponent } from './components/delete-transport/delete-transport.component';
import { TransportItemComponent } from './components/transport-item/transport-item.component';
import { ValiderReservationComponent } from './components/valider-reservation/valider-reservation.component';
import { AnuulerReservationComponent } from './components/anuuler-reservation/anuuler-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeTransportComponent,
    AddTransportComponent,
    DeleteTransportComponent,
    TransportItemComponent,
    ValiderReservationComponent,
    AnuulerReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //
    HttpClientModule,//
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }