import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceReservee } from 'src/app/models/PlaceReservee';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-anuuler-reservation',
  templateUrl: './anuuler-reservation.component.html',
  styleUrls: ['./anuuler-reservation.component.css']
})
export class AnuulerReservationComponent implements OnInit {
  public placesAnnulees!:PlaceReservee[];


  constructor(private transportService:TransportService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==undefined){
      this.router.navigate(["/login"])
    }
    this.transportService.getReservationsAnnulees().subscribe(
      (resp:PlaceReservee[])=>{
        this.placesAnnulees=resp;
      },
      (err:HttpErrorResponse)=>{
        console.log(err)
      }
    )
  }

  annulerReservation(id_transport:number,cin_user:string):void{
    this.transportService.annulerReserv(id_transport,cin_user).subscribe(
      (resp:void)=>{
        window.location.reload()
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )

  }

   
}
