package Etourism.App.controllers;

import Etourism.App.entities.Gerant;
import Etourism.App.repositories.GerantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;


@RestController
@RequestMapping("/gerant")
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200"})
public class GerantController {
    @Autowired
    RestTemplate restTemplate;
    @Autowired
    GerantRepository gerantRepository;

    private String url_WS_Transport="http://localhost:8081/transport/";





    @PostMapping("/login")
    public ResponseEntity<Gerant> login(@RequestBody Gerant gerant){
        return new ResponseEntity<Gerant>(gerantRepository.findGerantByEmailAndPassword(gerant.getEmail(),gerant.getPassword()),HttpStatus.OK);
    }



    @GetMapping("/reservationTouriste/{id_transport}/{cin_user}")
    public Object reserver_Touriste(@PathVariable("id_transport") Long id_transport, @PathVariable("cin_user") String cin_user){
        String url=url_WS_Transport+"reserver/"+id_transport+"/"+cin_user+"/"+false;
        Object object =restTemplate.getForObject(url,Object.class);
        return object;
    }

    @GetMapping("/etatReservationTouriste/{id_transport}/{cin_user}")
    public boolean estReservee(@PathVariable("id_transport") Long id_transport, @PathVariable("cin_user") String cin_user){
        String url=url_WS_Transport+"etatReservationTouriste/"+id_transport+"/"+cin_user;
        boolean etat =(boolean) restTemplate.getForObject(url,Object.class);
        return etat;
    }
    @GetMapping("/reservationsTouriste/{cin_user}")
    public Object reservations_Touriste(@PathVariable("cin_user") String cin_user){
        String url=url_WS_Transport+"mesReservations"+"/"+cin_user;
        Object reservations_touriste=restTemplate.getForObject(url,Object.class);
        return reservations_touriste;
    }
    @GetMapping("/demandeAnnulationReserv/{id_transport}/{cin_user}")
    public Object annulerReservation(@PathVariable("id_transport") Long id_transport, @PathVariable("cin_user") String cin_user){
        String url=url_WS_Transport+"demandeAnnulation/"+id_transport+"/"+cin_user+"/"+true;
        Object reservation_annulee=restTemplate.getForObject(url,Object.class);
        return reservation_annulee;
    }

  //  /{lieu_depart}/{type}/{date_depart}/{prix}
    @GetMapping("/chercherTransports")
    public Object chercher(@RequestParam(value = "lieu_depart",required = false) String lieu_depart,
                           @RequestParam(value = "type",required = false) String type,
                           @RequestParam(value = "date_depart",required = false) String date_depart,
                           @RequestParam(value = "prix",required = false) int prix){
        String url=url_WS_Transport+"chercher?lieu_depart={lieu_depart}&type={type}&date_depart={date_depart}&prix={prix}";
        System.out.println(url);
        Object transports=restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY,Object.class,lieu_depart,type,date_depart,prix);
        return transports;
    }
}
