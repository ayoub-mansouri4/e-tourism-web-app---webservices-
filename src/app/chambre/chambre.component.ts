import { Component, OnInit } from '@angular/core';
import {ChambreService} from '../chambre.service'
import {Chambre} from '../chambre';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
   chambres: Chambre[];
  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
  this.chambreService.getChambres().subscribe((data:Chambre[])=>{
     console.log(data);
     this.chambres=data;
  });
  }

deleteChambre(id: number) {
    this.chambreService.deleteChambre(id)
      .subscribe(
        data => {
          this.chambres=data;
          console.log(this.chambres);
        },
         (error: HttpErrorResponse) => {
                alert(error.message);
              }
            );
  }
resvChambre(id:number){
  this.chambreService.reservationchambre(id).subscribe(
      data=>{
      console.log(data);
      this.chambres=data;},
      error=>console.log(error));

  }

   annulresvChambre(id:number){
    this.chambreService.annlreservationchambre(id).subscribe(
        data=>{
        console.log(data);
        this.chambres=data;},
        error=>console.log(error));

    }





}
