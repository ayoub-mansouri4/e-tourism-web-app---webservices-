import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-transport',
  templateUrl: './home-transport.component.html',
  styleUrls: ['./home-transport.component.css']
})
export class HomeTransportComponent implements OnInit {
  first_name!:any;
  last_name!:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')==undefined){
      this.router.navigate(["/login"])
    }

    this.first_name=sessionStorage.getItem("firstName");
    this.last_name=sessionStorage.getItem("lastName");
  }

}
