package Etourism.App;

import Etourism.App.Services.GererTransport;
import Etourism.App.Services.ReservationTransport;
import Etourism.App.entities.PlaceReservee;
import Etourism.App.entities.Transport;
import Etourism.App.repositories.ReservationRepository;
import Etourism.App.repositories.TransportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInit implements CommandLineRunner {
    @Autowired
    GererTransport gererTransport;
    @Autowired
    ReservationTransport reservationTransport;
    @Autowired
    ReservationRepository reservationRepository;
    @Autowired
    TransportRepository transportRepository;

    @Override
    public void run(String... args) throws Exception {

     /*   gererTransport.ajouterTransport(new Transport(100,99));
        gererTransport.ajouterTransport(new Transport(3,0));
        gererTransport.ajouterTransport(new Transport(80,0));
        gererTransport.ajouterTransport(new Transport(60,0));
        gererTransport.ajouterTransport(new Transport(50,1));
        gererTransport.ajouterTransport(new Transport(10,30));


        Transport transport1 = transportRepository.findById(1L).get();
        reservationRepository.save(new PlaceReservee(transport1,"Q444256"));

       Transport transport4 = transportRepository.findById(4L).get();
        reservationRepository.save(new PlaceReservee(transport4,"Q100006"));
        reservationRepository.save(new PlaceReservee(transport4,"Q108806"));
        reservationRepository.save(new PlaceReservee(transport4,"Q308806"));

        Transport transport3 = transportRepository.findById(3L).get();
        reservationRepository.save(new PlaceReservee(transport3,"QA12358"));
        reservationRepository.save(new PlaceReservee(transport3,"QA236589"));



        //reservationTransport.findPlaceReservee("Q100006",2L).toString();

      */




    }
}
