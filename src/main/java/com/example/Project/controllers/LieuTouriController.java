package com.example.Project.controllers;

import com.example.Project.models.LieuTouri;
import com.example.Project.services.LieuTouriService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AllArgsConstructor
public class LieuTouriController {
    private final LieuTouriService lieuService;
    //Ajout des lieux

    @PostMapping("/addlieu")
    public LieuTouri addlieu(@RequestBody LieuTouri lieu){
        return lieuService.saveLieu(lieu);
    }
    //Affichage des lieux

    @GetMapping("/lieux")
    public List<LieuTouri> findAlllieux() {
        return lieuService.getLieu();
    }

    //Supression des lieux
    @DeleteMapping("/deletelieu/{id}")
    public void deletelieu(@PathVariable  Integer id) {
        lieuService.deleteLieu(id);
}}
