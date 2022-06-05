import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LieuTouri} from './lieu-touri';

@Injectable({
  providedIn: 'root'
})
export class LieuTouriService {

  private baseUrl:String="http://localhost:8080/lieux";
  private baseUrl1:String="http://localhost:8080/deletelieu";
  private baseUrl2:String="http://localhost:8080/addlieu";
  constructor(private http: HttpClient) {}

   getLieux(): Observable<LieuTouri[]>{
   return this.http.get<LieuTouri[]>(`${this.baseUrl}`);
   }

   addLieu(LieuTouri: Object): Observable<Object> {
       return this.http.post(`${this.baseUrl2}`, LieuTouri);
     }

   deleteLieu(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl1}/${id}`, { responseType: 'text' });
       }


}

