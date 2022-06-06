import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public images:Images=new Images();

  constructor(private transportService:TransportService,private router:Router) { }

  ngOnInit(): void {
  }

  supprimerTransport(id:number):void{
           this.transportService.deleteTransport(id).subscribe(
             (resp:any)=>{
               console.log(resp)
               window.location.reload();
            },(err:HttpErrorResponse)=>console.log(err)
           );
           
  }

}
