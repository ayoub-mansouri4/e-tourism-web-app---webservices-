import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transport } from '../models/Transport';
import { PlaceReservee } from '../models/PlaceReservee';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private urlWsTransport=environment.urlWsTransport;
  private urlGerantServer=environment.urlGerantServer;


  constructor(private http:HttpClient) { }

  public getAllTrans():Observable<Transport[]>{
    return this.http.get<Transport[]>(`${this.urlWsTransport}/transport/getAll`);
  }

  public  reserver(id_tr:number,cin_user:string):Observable<PlaceReservee>{
     return this.http.get<PlaceReservee>(`${this.urlGerantServer}/gerant/reservationTouriste/${id_tr}/${cin_user}`);
  }

 public etat_Reservation(id_tr:number,cin_user:string):Observable<boolean>{
   return this.http.get<boolean>(`${this.urlGerantServer}/gerant/etatReservationTouriste/${id_tr}/${cin_user}`);
 }

 public mesReservation(cin_user:string):Observable<PlaceReservee[]>{
   return this.http.get<PlaceReservee[]>(`${this.urlGerantServer}/gerant/reservationsTouriste/${cin_user}`);
 }

 public annulerReservation(id_tr:number,cin_user:string):Observable<PlaceReservee>{
    return this.http.get<PlaceReservee>(`${this.urlGerantServer}/gerant/demandeAnnulationReserv/${id_tr}/${cin_user}`);
 }

 public chercherTransports(lieu_depart:string,type:string,date_depart:string,prix:number):Observable<Transport[]>{
   return this.http.get<Transport[]>(`${this.urlGerantServer}/gerant/chercherTransports?lieu_depart=${lieu_depart}&type=${type}&date_depart=${date_depart}&prix=${prix}`);
 }


}
