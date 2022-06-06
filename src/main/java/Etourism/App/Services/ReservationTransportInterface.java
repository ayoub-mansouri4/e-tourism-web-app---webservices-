package Etourism.App.Services;

import Etourism.App.entities.PlaceReservee;

import java.util.List;

public interface ReservationTransportInterface {
    public boolean disponibilteTransport(String cin_user,Long id);
    public PlaceReservee Reserver(String cin_user, Long id_transport,boolean statut);
    public void annulerReservation(String cin_user,Long id_transport);
    public List<PlaceReservee>  placesReserveesByStatut(boolean statut);
    public PlaceReservee demandeAnnulation(String cin_user, Long id_transport,boolean statut_annulation);

}
