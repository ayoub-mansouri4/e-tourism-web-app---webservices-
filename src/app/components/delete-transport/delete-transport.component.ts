import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transport } from 'src/app/models/Transport';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-delete-transport',
  templateUrl: './delete-transport.component.html',
  styleUrls: ['./delete-transport.component.css']
})
export class DeleteTransportComponent implements OnInit {
  public transports!:Transport[];

  constructor(private transportService:TransportService,private router:Router) { }

  ngOnInit(): void {
    this.transportService.getAllTrans().subscribe(
      (resp:Transport[])=>{this.transports=resp},(err:HttpErrorResponse)=>{
        console.log(err);
      }
    )
   
  }

     

}
