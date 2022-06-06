import { ChambreService } from '../chambre.service';
import { Chambre } from '../chambre';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit {

  chambre: Chambre= new Chambre();
  submitted = false;

  constructor(private chambreService: ChambreService,
    private router: Router) { }

  ngOnInit() {
  }

  newHotel(): void {
    this.submitted = false;
    this.chambre = new Chambre();
  }

  save() {
    this.chambreService
    .addChambre(this.chambre).subscribe(data => {
      console.log(data)
      this.chambre = new Chambre();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/chambres']);
  }

}
