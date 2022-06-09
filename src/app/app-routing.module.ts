import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransportComponent } from './components/add-transport/add-transport.component';
import { AnuulerReservationComponent } from './components/anuuler-reservation/anuuler-reservation.component';
import { DeleteTransportComponent } from './components/delete-transport/delete-transport.component';
import { HomeTransportComponent } from './components/home-transport/home-transport.component';
import { LoginComponent } from './components/login/login.component';
import { TransportItemComponent } from './components/transport-item/transport-item.component';
import { ValiderReservationComponent } from './components/valider-reservation/valider-reservation.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"homeTransport",component:HomeTransportComponent},
  {path:"addTransport",component:AddTransportComponent},
  {path:"deleteTransport",component:DeleteTransportComponent},
  {path:"item",component:TransportItemComponent},
  {path:"validateReserv",component:ValiderReservationComponent},
  {path:"cancelReserv",component:AnuulerReservationComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
