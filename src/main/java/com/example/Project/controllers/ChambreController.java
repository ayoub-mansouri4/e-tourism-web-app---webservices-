package com.example.Project.controllers;


import com.example.Project.models.Chambre;
import com.example.Project.services.ChambreService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@AllArgsConstructor
public class ChambreController {

    private final ChambreService chambreservice;
    //ajout des chambres

    @PostMapping("/addChambre")
    public Chambre addchambre(@RequestBody Chambre chambre){
        return chambreservice.saveChambre(chambre);
    }
    //l'affichage des chambres

    @GetMapping("/chambres")
    public List<Chambre> findAllChambres() {
        return chambreservice.getChambres();
    }
    //supression du chambre
    @DeleteMapping("/deletechambre/{id}")
    public void deletechambre(@PathVariable Integer id) {
        chambreservice.deleteChambre(id);
    }

    //disponibilte des chambres
    @GetMapping("/chambre/{id}")
    public String disponibiltechambre(@PathVariable Integer id) {
        return chambreservice.dispo(id);
    }
    //la reservation
    @PutMapping("/update/rev/{id}")
    public void reserverchambre(@PathVariable Integer id) {
        chambreservice.reserv(id);
    }
    //annulation de reservaion
    @PutMapping("/update/annurev/{id}")
    public void Annreserverchambre(@PathVariable Integer id) {
        chambreservice.Annreserv(id);
    }

    @GetMapping("/chambres/{id}")
    public List<String> findAllChambresHotel(@PathVariable Integer id) {
        return chambreservice.getChambresHotel(id);

    }


}
