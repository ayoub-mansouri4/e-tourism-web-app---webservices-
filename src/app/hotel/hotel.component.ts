import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service'
import {Hotel} from '../Hotel';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
   hotels: Hotel[];
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  this.hotelService.getHotels().subscribe((data:Hotel[])=>{
     console.log(data);
     this.hotels=data;
  });
  }

deleteHotel(id: number) {
    this.hotelService.deleteHotel(id)
      .subscribe(
        data => {

          console.log(data);
          this.hotels=data;
        },
        error => console.log(error));
  }



}
