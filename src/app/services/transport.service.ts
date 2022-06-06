import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlaceReservee } from '../models/PlaceReservee';
import { Transport } from '../models/Transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private urlWsTransport=environment.urlWsTransport;


  constructor(private http:HttpClient) { }

  public saveTransport(transport:Transport):Observable<Transport>{
    
    return this.http.post<Transport>(`${this.urlWsTransport}/transport/addTrans`,transport);
  }

  public getAllTrans():Observable<Transport[]>{
    return this.http.get<Transport[]>(`${this.urlWsTransport}/transport/getAll`);
  }

  public  ReserverPlaceByStatut(id_transport:number,cin_user:string,statut:boolean):Observable<PlaceReservee>{
    return this.http.get<PlaceReservee>(`${this.urlWsTransport}/transport/reserver/${id_transport}/${cin_user}/${statut}`);
  }

  public  placesReservees(statut:number):Observable<PlaceReservee[]>{
    return this.http.get<PlaceReservee[]>(`${this.urlWsTransport}/transport/placesReservees/${statut}`);
  }

  public getReservationsAnnulees():Observable<PlaceReservee[]>{
    return  this.http.get<PlaceReservee[]>(`${this.urlWsTransport}/transport/cancelations`);
  }

  public  annulerReserv(id_transport:number,cin_user:string):Observable<void>{
     return  this.http.delete<void>(`${this.urlWsTransport}/transport/annulerReservation/${id_transport}/${cin_user}`)
  }

  public deleteTransport(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlWsTransport}/transport/deleteTrans/${id}`);
  }
}
