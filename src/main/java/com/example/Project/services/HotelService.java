package com.example.Project.services;

import com.example.Project.models.Hotel;
import com.example.Project.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HotelService {
    @Autowired
    private HotelRepository hotelRepository;

    public List<Hotel> getHotels() {
        return hotelRepository.findAll();
    }


    public void deleteHotel(String id) {
        hotelRepository.deleteById(String.valueOf(id));

    }

    public Hotel saveHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }
}
