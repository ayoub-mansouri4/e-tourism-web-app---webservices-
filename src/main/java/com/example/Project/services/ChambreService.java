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

    public void getChambresHotl(Integer hotel_id){

    }

    public void deleteChambre(Integer id) {
        chambreRepository.deleteById(id);

    }

    public Chambre saveChambre(Chambre chambre) {
         Chambre save = chambreRepository.save(chambre);
        return save;

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
    public String reserv(Integer id) {
            if(dispo(id)=="Non reservee"){
            Chambre chambra=chambreRepository.findById(id).orElse(null);
            chambra.setEtat_chambre(true);
            chambreRepository.save(chambra);
            return "Reservation faite";}
            else{
                return "Chambre deja reservee";
            }



    }

    public String Annreserv(Integer id) {
        if(dispo(id)=="reservee"){
        Chambre chambra=chambreRepository.findById(id).orElse(null);
        chambra.setEtat_chambre(false);
        chambra.setCin_touriste("");
        chambreRepository.save(chambra);
        return "Annulation faite";
    }
        else{
            return "Chambre non reservee";
        }

}

    public List<String> getChambresHotel(Integer id) {
         return chambreRepository.findchambrebyhotel(id);
    }
}