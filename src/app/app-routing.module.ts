import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddLieuTouriComponent } from './add-lieu-touri/add-lieu-touri.component';
export const appRouteList: Routes = [
 { path: 'hotels', component: HotelComponent },
{ path: 'add', component: AddHotelComponent },
{ path: 'addlieu', component: AddLieuTouriComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRouteList)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }



