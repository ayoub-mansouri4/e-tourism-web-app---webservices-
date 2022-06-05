import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hotel} from './Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl:String="http://localhost:8080/hotels";
  private baseUrl1:String="http://localhost:8080/delete";
  private baseUrl2:String="http://localhost:8080/addHotel";
  constructor(private http: HttpClient) {}

   getHotels(): Observable<Hotel[]>{
   return this.http.get<Hotel[]>(`${this.baseUrl}`);
   }

   addHotel(Hotel: Object): Observable<Object> {
       return this.http.post(`${this.baseUrl2}`, Hotel);
     }

   deleteHotel(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl1}/${id}`, { responseType: 'text' });
       }


}
