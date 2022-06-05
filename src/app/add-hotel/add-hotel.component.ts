import { HotelService } from '../hotel.service';
import { Hotel } from '../Hotel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  hotel: Hotel= new Hotel();
  submitted = false;

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit() {
  }

  newHotel(): void {
    this.submitted = false;
    this.hotel = new Hotel();
  }

  save() {
    this.hotelService
    .addHotel(this.hotel).subscribe(data => {
      console.log(data)
      this.hotel = new Hotel();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/hotels']);
  }

}
