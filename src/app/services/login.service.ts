import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gerant } from '../models/Gerant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlGerantServer=environment.urlGerantServer;


  constructor(private http:HttpClient,private router:Router) { }


  public login(gerant:Gerant):Observable<Gerant>{
      return this.http.post<Gerant>(`${this.urlGerantServer}/gerant/login`,gerant)
  }
  ssn?:any;
  selectEmail(){
    return this.ssn=sessionStorage.getItem('email');
    }
    logout(){
      sessionStorage.removeItem('firstName');
      sessionStorage.removeItem('lastName');
      sessionStorage.removeItem('email');
       sessionStorage.removeItem('password');
        this.router.navigate(['/login']);
     
      }
}
