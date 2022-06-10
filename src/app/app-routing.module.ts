import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherTransportsComponent } from './components/afficher-transports/afficher-transports.component';
import { LoginComponent } from './components/login/login.component';
import { MesReservationsComponent } from './components/mes-reservations/mes-reservations.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RegisterComponent } from './components/register/register.component';
import { MeteoComponent } from './meteo/mainComponent/meteo/meteo.component';
import { WeatherSearchComponent } from './meteo/weather';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"transports",component:AfficherTransportsComponent},
  {path:"mesReservations",component:MesReservationsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profil",component:ProfilComponent},
  {path:"meteo",component:MeteoComponent},
  {path:"a",component:WeatherSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
