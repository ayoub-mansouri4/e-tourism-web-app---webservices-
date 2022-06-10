import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceReservee } from 'src/app/models/PlaceReservee';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-mes-reservations',
  templateUrl: './mes-reservations.component.html',
  styleUrls: ['./mes-reservations.component.css']
})
export class MesReservationsComponent implements OnInit {
  public mesReservations!:PlaceReservee[];
  public cin_user:any;
  constructor(private transportService:TransportService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==undefined){
      this.router.navigate(["/login"])
    }
    this.cin_user=sessionStorage.getItem("cin_user");
    this.transportService.mesReservation(this.cin_user).subscribe(
      (resp:PlaceReservee[])=>{
        this.mesReservations=resp;
        console.log(resp);
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

  annulerReserv(id_tr:number,cin_user:string):void{
    this.transportService.annulerReservation(id_tr,cin_user).subscribe(
      (resp:PlaceReservee)=>{
        console.log(resp);
        window.location.reload()
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

}
