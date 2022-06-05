import { Component, OnInit } from '@angular/core';
import {LieuTouriService} from '../lieu-touri.service'
import {LieuTouri} from '../lieu-touri';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lieu-touri',
  templateUrl: './lieu-touri.component.html',
  styleUrls: ['./lieu-touri.component.css']
})
export class LieuTouriComponent implements OnInit {
   lieux: LieuTouri[];
  constructor(private lieutouriService: LieuTouriService) { }

  ngOnInit(): void {
  this.lieutouriService.getLieux().subscribe((data:LieuTouri[])=>{
     console.log(data);
     this.lieux=data;
  });
  }

deleteLieu(id: number) {
    this.lieutouriService.deleteLieu(id)
      .subscribe(
        data => {
          console.log(data);
          this.lieux=data;
        },
        error => console.log(error));
  }



}
