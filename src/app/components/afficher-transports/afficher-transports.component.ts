import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceReservee } from 'src/app/models/PlaceReservee';
import { Transport } from 'src/app/models/Transport';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-afficher-transports',
  templateUrl: './afficher-transports.component.html',
  styleUrls: ['./afficher-transports.component.css']
})
export class AfficherTransportsComponent implements OnInit {

  public transports!:Transport[];
  lieu_depart:string="*";
  type:string="*";
  date_depart:string="*";
  prix!:any;
  public cin_user:any;

  constructor(private transportService:TransportService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==undefined){
      this.router.navigate(["/login"])
    }
    this.cin_user=sessionStorage.getItem("cin_user");

    this.transportService.getAllTrans().subscribe(
      (resp:Transport[])=>{this.transports=resp},(err:HttpErrorResponse)=>{
        console.log(err);
      }
    )
  }

  chercherTransports():void{
    
  if(this.prix==undefined)this.prix=0;
    this.transportService.chercherTransports(this.lieu_depart,this.type,this.date_depart,this.prix).subscribe(
      (resp:Transport[])=>{
        this.transports=resp
        this.lieu_depart="*"
        this.type="*"
        this.date_depart="*"
        this.prix=undefined;
      },(err:HttpErrorResponse)=>{
        console.log(err);
      }
    )
  }
}

 


