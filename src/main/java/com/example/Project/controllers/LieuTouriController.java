package com.example.Project.controllers;

import com.example.Project.models.LieuTouri;
import com.example.Project.services.LieuTouriService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class LieuTouriController {
    private final LieuTouriService lieuService;
    //Ajout des hotels

    @PostMapping("/addlieu")
    public LieuTouri addhotel(@RequestBody LieuTouri lieu){
        return lieuService.saveLieu(lieu);
    }
    //Affichage des hotels

    @GetMapping("/lieux")
    public List<LieuTouri> findAlllieux() {
        return lieuService.getLieu();
    }

    //Supression des hotels
    @DeleteMapping("/deletelieu/{id}")
    public void deletelieu(@PathVariable  Integer id) {
        lieuService.deleteLieu(id);
}}
