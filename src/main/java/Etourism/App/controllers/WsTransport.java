package Etourism.App.controllers;

import Etourism.App.Services.GererTransport;
import Etourism.App.Services.ReservationTransport;
import Etourism.App.entities.PlaceReservee;
import Etourism.App.entities.Transport;
import Etourism.App.repositories.ReservationRepository;
import Etourism.App.repositories.TransportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transport")
@CrossOrigin(origins = "http://localhost:4200")
public class WsTransport {
    @Autowired
    GererTransport gererTransport;
    @Autowired
    ReservationTransport reservationTransport;
    @Autowired
    TransportRepository transportRepository;
    @Autowired
    ReservationRepository reservationRepository;



   @GetMapping("/getAll")
   public ResponseEntity<List<Transport>> getAllTrans(){
       return new ResponseEntity<List<Transport>>(transportRepository.findAll(),HttpStatus.OK);
   }

    @GetMapping("/placesReservees/{statut}")
    public ResponseEntity<List<PlaceReservee>> placesReservees(@PathVariable("statut") int statut){
        return new ResponseEntity<List<PlaceReservee>>(reservationTransport.placesReserveesByStatut(statut==1),HttpStatus.OK);
    }

    @PostMapping("/addTrans")
    public ResponseEntity<Transport> Ajouter(@RequestBody Transport transport){

        return new ResponseEntity<Transport>(gererTransport.ajouterTransport(transport),HttpStatus.OK);
   }


   @DeleteMapping("/deleteTrans/{id}")
    public void supprimer(@PathVariable("id") Long id){

       gererTransport.supprimerTransport(id);
   }

   @GetMapping("/reserver/{id_transport}/{cin_user}/{statut}")
    public ResponseEntity<PlaceReservee> reserverTransport(@PathVariable("id_transport") Long id_transport,@PathVariable("cin_user") String cin_user,@PathVariable("statut") boolean statut){
      return new ResponseEntity<PlaceReservee>(reservationTransport.Reserver(cin_user,id_transport,statut),HttpStatus.OK);
   }


    @GetMapping("/cancelations")
    public ResponseEntity<List<PlaceReservee>> getAnnulations(){
        return new ResponseEntity<List<PlaceReservee>>(reservationRepository.findPlaceReserveesByEstAnnulee(true),HttpStatus.OK);
    }
   @GetMapping("demandeAnnulation/{id_transport}/{cin_user}/{statut_annulation}")
   public ResponseEntity<PlaceReservee> demandeAnnulation(@PathVariable("id_transport") Long id_transport,@PathVariable("cin_user") String cin_user,@PathVariable("statut_annulation") boolean statut_annulation){
      return new ResponseEntity<PlaceReservee>(reservationTransport.demandeAnnulation(cin_user,id_transport,statut_annulation),HttpStatus.OK);
   }
   @DeleteMapping("/annulerReservation/{id_transport}/{cin_user}")
    public void annulerReservatio(@PathVariable("id_transport") Long id_transport,@PathVariable("cin_user") String cin_user){
        reservationTransport.annulerReservation(cin_user,id_transport);
    }

}
