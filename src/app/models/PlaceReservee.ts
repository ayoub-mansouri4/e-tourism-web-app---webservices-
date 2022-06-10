import { Transport } from "./Transport";

export class PlaceReservee{ 
    id!:number;
    cin_user!:string;
    transport!:Transport;
    estValidee!:boolean;
    estAnnulee!:boolean;

}