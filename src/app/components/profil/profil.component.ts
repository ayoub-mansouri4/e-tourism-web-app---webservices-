import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public user:User=new User();
 id!:number;

  constructor(private router:Router,private authService:AuthService,) { }

  ngOnInit(): void {
    this.getUser()

  }
  getUser(){
    this.authService.getUserInfo(Number(sessionStorage.getItem('id'))).subscribe(
      (resp:User)=>{
        this.user=resp;
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    )
  }

  update(){
    this.authService.register(this.user).subscribe(
      (resp:User)=>{
        this.user=resp;
          sessionStorage.setItem('email',resp.email);
          sessionStorage.setItem('cin_user',resp.cin_user);
          sessionStorage.setItem('password',resp.password);
          sessionStorage.setItem('firstName',resp.firstName);
           sessionStorage.setItem('lastName',resp.lastName);
        window.location.reload();
        
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    )
  }

}
