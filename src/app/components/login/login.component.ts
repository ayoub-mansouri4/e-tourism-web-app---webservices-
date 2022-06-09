import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gerant } from 'src/app/models/Gerant';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  gerant:Gerant= new Gerant();

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')!=undefined){
      this.router.navigate(["/homeTransport"])
    }
  }

  public login():void{
    this.loginService.login(this.gerant).subscribe(
      (resp:Gerant)=>{
        console.log(resp)
        if(resp!=null){
          sessionStorage.setItem('email',resp.email);
          sessionStorage.setItem('password',resp.password);
          sessionStorage.setItem('firstName',resp.first_name);
           sessionStorage.setItem('lastName',resp.last_name);
          this.router.navigate(["/homeTransport"]);
         }
      },(err:HttpErrorResponse)=>{
        console.log(err);
      }
    )

  }

}
