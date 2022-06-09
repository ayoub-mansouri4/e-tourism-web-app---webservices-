import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceReservee } from 'src/app/models/PlaceReservee';
import { LoginService } from 'src/app/services/login.service';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public placesNonValidees!:PlaceReservee[];
  public placesAnnulees!:PlaceReservee[];
  public estConnectee:boolean=false;

  public n1!:number;
  public n2!:number;


  constructor(private transportService:TransportService,private router:Router,public loginService:LoginService) { }


  ngOnInit(): void {
    if(sessionStorage.getItem("email")!=undefined){
      this.estConnectee=true
     
    }
    //----------------------------
    this.transportService.placesReservees(0).subscribe(
      (resp:PlaceReservee[])=>{
        this.placesNonValidees=resp;
        this.n1=resp.length
      },
      (err:HttpErrorResponse)=>{
        console.log(err)
      }
    )

    //------------------------------
    this.transportService.getReservationsAnnulees().subscribe(
      (resp:PlaceReservee[])=>{
        this.placesAnnulees=resp;
      },
      (err:HttpErrorResponse)=>{
        console.log(err)
      }
    )
  
  }

  
  


}
