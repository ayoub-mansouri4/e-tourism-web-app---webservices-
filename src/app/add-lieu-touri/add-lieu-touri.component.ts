import { LieuTouriService } from '../lieu-touri.service';
import { LieuTouri } from '../lieu-touri';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lieu-touri',
  templateUrl: './add-lieu-touri.component.html',
  styleUrls: ['./add-lieu-touri.component.css']
})
export class AddLieuTouriComponent implements OnInit {

  lieu: LieuTouri= new LieuTouri();
  submitted = false;

  constructor(private lieutouriService: LieuTouriService,
    private router: Router) { }

  ngOnInit() {
  }

  newLieuTouri(): void {
    this.submitted = false;
    this.lieu = new LieuTouri();
  }

  save() {
    this.lieutouriService
    .addLieu(this.lieu).subscribe(data => {
      console.log(data)
      this.lieu = new LieuTouri();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/lieux']);
  }

}
