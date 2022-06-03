package com.example.Project.controllers;

import com.example.Project.models.Chambre;
import com.example.Project.models.Hotel;

import com.example.Project.services.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
public class HotelController {

    private final HotelService hotelService;
    //Ajout des hotels

    @PostMapping("/addHotel")
    public Hotel addhotel(@RequestBody Hotel hotel){
        return hotelService.saveHotel(hotel);
    }
    //Affichage des hotels

    @GetMapping("/hotels")
    public List<Hotel> findAllHotels() {
        return hotelService.getHotels();
    }

    //Supression des hotels
    @DeleteMapping("/delete/{id}")
    public void deletehotel(@PathVariable  Integer id) {
        hotelService.deleteHotel(id);
    }




}
