import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  urlTouristeServer=environment.urlTouristeServer;

  constructor(private http:HttpClient,private router:Router) { }

  public login(user:User):Observable<User>{
    return this.http.post<User>(`${this.urlTouristeServer}/user/login`,user);
  }

  public register(user:User):Observable<User>{
    return this.http.post<User>(`${this.urlTouristeServer}/user/register`,user);
  }

  public  getUserInfo(id:number):Observable<User>{
    return this.http.get<User>(`${this.urlTouristeServer}/user/getUser/${id}`);
  }
    ssn?:any;
  selectEmail(){
         return this.ssn=sessionStorage.getItem('email');
  }

  logoutUser(){
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');
    sessionStorage.removeItem("cin_user");
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
     sessionStorage.removeItem('password');
      this.router.navigate(['/login']);
    }
}
