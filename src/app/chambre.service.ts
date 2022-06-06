import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chambre} from './chambre';
@Injectable({
  providedIn: 'root'
})

export class ChambreService {

  private baseUrl:String="http://localhost:8080/chambres";
  private baseUrl1:String="http://localhost:8080/deletechambre";
  private baseUrl2:String="http://localhost:8080/addChambre";
  private baseUrl3:String="http://localhost:8080/chambre";
  private baseUrl4:String="http://localhost:8080/update/rev";
  private baseUrl5:String="http://localhost:8080/update/annurev";
  constructor(private http: HttpClient) {}

   getChambres(): Observable<Chambre[]>{
   return this.http.get<Chambre[]>(`${this.baseUrl}`);
   }

   addChambre(Chambre: Object): Observable<Object> {
       return this.http.post(`${this.baseUrl2}`,Chambre);
     }

   deleteChambre(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl1}/${id}`, { responseType: 'text' });
       }
   disponibilitechambre(id: number): Observable<any> {
    return this.http.get<String>(`${this.baseUrl3}/${id}`, { responseType: 'json' });
       }
   reservationchambre(id: number): Observable<any> {
         return this.http.put(`${this.baseUrl4}/${id}`, { responseType: 'text' });
         }

   annlreservationchambre(id: number): Observable<any> {
            return this.http.put(`${this.baseUrl5}/${id}`, { responseType: 'text' });
            }

}
