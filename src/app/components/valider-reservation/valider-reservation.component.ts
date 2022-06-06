import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceReservee } from 'src/app/models/PlaceReservee';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-valider-reservation',
  templateUrl: './valider-reservation.component.html',
  styleUrls: ['./valider-reservation.component.css']
})
export class ValiderReservationComponent implements OnInit {
     public placesNonValidees!:PlaceReservee[];
  constructor(private transportService:TransportService,private router:Router) { }

  ngOnInit(): void {
    this.transportService.placesReservees(0).subscribe(
      (resp:PlaceReservee[])=>{
        this.placesNonValidees=resp;
      },
      (err:HttpErrorResponse)=>{
        console.log(err)
      }
    )
  }

  validerPlace(id_transport:number,cin_user:string):void{
    this.transportService.ReserverPlaceByStatut(id_transport,cin_user,true).subscribe(
      (resp:PlaceReservee)=>{
        console.log(resp)
         window.location.reload();
      },(err:HttpErrorResponse)=>{
        console.log(err)
      }
    )
  }

}
