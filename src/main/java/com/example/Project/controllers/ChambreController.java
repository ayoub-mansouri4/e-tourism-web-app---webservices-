package com.example.Project.controllers;


import com.example.Project.models.Chambre;
import com.example.Project.models.Hotel;
import com.example.Project.repositories.ChambreRepository;
import com.example.Project.services.ChambreService;
import com.example.Project.services.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public void deletechambre(@PathVariable String id) {
        chambreservice.deleteChambre(id);
    }

    //disponibilte des chambres
    @GetMapping("/chambre/{id}")
    public String disponibiltechambre(@PathVariable String id) {
        return chambreservice.dispo(id);
    }
    //la reservation
    @PutMapping("/update/rev/{id}")
    public void reserverchambre(@PathVariable String id) {
        chambreservice.reserv(id);
    }
    //annulation de reservaion
    @PutMapping("/update/annurev/{id}")
    public void Annreserverchambre(@PathVariable String id) {
        chambreservice.Annreserv(id);
    }




}
