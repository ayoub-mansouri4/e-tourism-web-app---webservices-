package com.example.Project.services;

import com.example.Project.models.Chambre;
import com.example.Project.repositories.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChambreService {
    @Autowired
    private ChambreRepository chambreRepository;

    public List<Chambre> getChambres() {
        return chambreRepository.findAll();
    }


    public void deleteChambre(Integer id) {
        chambreRepository.deleteById(id);

    }

    public Chambre saveChambre(Chambre chambre) {
         Chambre save = chambreRepository.save(chambre);
        return save;

    }

    public Chambre reserv(Integer id) {
            Chambre chambra=chambreRepository.findById(id).orElse(null);
            chambra.setEtat_chambre(true);
            return chambreRepository.save(chambra);



    }

    public Chambre Annreserv(Integer id) {
        Chambre chambra=chambreRepository.findById(id).orElse(null);
        chambra.setEtat_chambre(false);
        return chambreRepository.save(chambra);
    }

    public String dispo(Integer id) {
        Chambre chambra=chambreRepository.findById(id).orElse(null);
        boolean rev=chambra.getEtat_chambre();
        if(rev==false){
            return "Non reservee";
        }else{
            return "reservee";
        }
    }
}