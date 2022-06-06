package Etourism.App.Services;

import Etourism.App.entities.PlaceReservee;
import Etourism.App.entities.Transport;
import Etourism.App.repositories.ReservationRepository;
import Etourism.App.repositories.TransportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationTransport implements ReservationTransportInterface{

   @Autowired
    TransportRepository transportRepository;

    @Autowired
    ReservationRepository reservationRepository;

    public PlaceReservee findPlaceReservee(String cin_user,Long id_transport){
        List<PlaceReservee> PlaceReservees = transportRepository.findById(id_transport).get().getPlaceReservees();
        for(PlaceReservee p : PlaceReservees){
            if((p.getTransport().getId_transport()).equals(id_transport) && p.getCin_user().equals(cin_user)){
                return p;
            }
        }
        return null;
    }

    @Override
    public boolean disponibilteTransport(String cin_user,Long id_transport) {
        Transport transport= transportRepository.findById(id_transport).get();
        PlaceReservee placeReservee  = findPlaceReservee(cin_user,id_transport);

        if( (placeReservee==null) && transport.getNbr_places()!=0 && transport.getNbr_places()!=transport.getNbr_places_reservees()){
            return true;
        }
        return false;
    }

    @Override
    public PlaceReservee Reserver(String cin_user, Long id_transport,boolean statut) {
        if(!disponibilteTransport(cin_user,id_transport) && statut!=true) {
            return null;
        }else if (statut==true){
            PlaceReservee placeReservee  = findPlaceReservee(cin_user,id_transport);
            placeReservee.setEstValidee(statut);
            return reservationRepository.save(placeReservee);
        }
        Transport transport= transportRepository.findById(id_transport).get();
        transport.setNbr_places_reservees(1+transport.getNbr_places_reservees());
        PlaceReservee placeReservee= new PlaceReservee();
        placeReservee.setCin_user(cin_user);
        placeReservee.setTransport(transport);
        return reservationRepository.save(placeReservee);
    }

    @Override
    public void annulerReservation(String cin_user, Long id_transport) {
        PlaceReservee placeReservee  = findPlaceReservee(cin_user,id_transport);
        if(placeReservee!=null){
            reservationRepository.deleteById(placeReservee.getId());
        };
    }

    @Override
    public List<PlaceReservee> placesReserveesByStatut(boolean statut) {
        return reservationRepository.findPlaceReserveesByEstValidee(statut);
    }

    @Override
    public PlaceReservee demandeAnnulation(String cin_user, Long id_transport, boolean statut_annulation) {
        PlaceReservee placeReservee  = findPlaceReservee(cin_user,id_transport);
        if(placeReservee!=null) return null;
        placeReservee.setEstAnnulee(statut_annulation);
        return reservationRepository.save(placeReservee);
    }
}
