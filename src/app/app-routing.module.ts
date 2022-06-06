import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddLieuTouriComponent } from './add-lieu-touri/add-lieu-touri.component';
import { LieuTouriComponent} from './lieu-touri/lieu-touri.component';
import {ChambreComponent} from './chambre/chambre.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
const appRouteList: Routes = [
 { path: 'hotels', component: HotelComponent },
 { path: '', redirectTo: 'hotels' , pathMatch:'full' },
 { path: 'lieux', component: LieuTouriComponent },
{ path: 'addHotel', component: AddHotelComponent },
{ path: 'addlieu', component: AddLieuTouriComponent },
{ path: 'chambres', component: ChambreComponent },
{ path: 'addChambre', component: AddChambreComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRouteList)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }



