import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Images } from 'src/app/models/Images';
import { Transport } from 'src/app/models/Transport';
import { TransportService } from 'src/app/services/transport.service';



@Component({
  selector: 'app-transport-item',
  templateUrl: './transport-item.component.html',
  styleUrls: ['./transport-item.component.css']
})
export class TransportItemComponent implements OnInit {

  @Input() transport:Transport=new Transport();
  @Input() cin_user!:string;
  public images:Images=new Images();
  public estReservee!:boolean;
  closeResult: string = '';


  constructor(private transportService:TransportService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.transportService.etat_Reservation(this.transport.id_transport,this.cin_user).subscribe(
      (resp:boolean)=>{
        this.estReservee=resp;
        console.log(resp);
      },(err:HttpErrorResponse)=>{
        console.log(err);
      }
    )
  }

  
  reserver(id_tr:number,cin_user:string):void{
            this.transportService.reserver(id_tr,cin_user).subscribe(
              (resp:any)=>{
               console.log(resp)
               
             },(err:HttpErrorResponse)=>console.log(err)
            );
            window.location.reload();
           
  }



  
  
}
