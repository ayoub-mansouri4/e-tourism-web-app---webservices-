import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transport } from 'src/app/models/Transport';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {
    public i:number=1;
    public transport:Transport =new Transport();
  constructor(private transportService:TransportService,private router:Router ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==undefined){
      this.router.navigate(["/login"])
    }
  }


  public increment_nbr_places():void{
             this.i+=1;
  }
  public decrement_nbr_places():void{
       if(this.i>1) this.i-=1;
  }
    
  public ajouterTransport():void{
    this.transport.nbr_places=this.i;
    this.transportService.saveTransport(this.transport).subscribe(
      (resp:Transport)=>{
       this.router.navigate(['/deleteTransport'])
      }, (error:HttpErrorResponse)=>{console.log(error)}

    );
  }

}
