import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  id!:string;
  

 constructor(private authService:AuthService,private router:Router) { }

 ngOnInit(): void {
   if(sessionStorage.getItem("email")!=undefined)
   this.router.navigate(['/transports']);
 }



 login(){
  let resp = this.authService.login(this.user);
  resp.subscribe(
    (resp:User)=>{
      if(resp!=null){
       sessionStorage.setItem('email',resp.email);
       sessionStorage.setItem('cin_user',resp.cin_user);
       sessionStorage.setItem('password',resp.password);
       sessionStorage.setItem('firstName',resp.firstName);
        sessionStorage.setItem('lastName',resp.lastName);
       this.id=resp.id.toString();
       sessionStorage.setItem('id',this.id);

       this.router.navigate(["/transports"]);
      }
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    }
  );
 }

}
