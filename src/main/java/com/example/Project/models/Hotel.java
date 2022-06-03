package com.example.Project.models;

import com.example.Project.models.Chambre;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
@Data
@Entity
@Table
@NoArgsConstructor

public class Hotel {
    @Id
    @GeneratedValue(generator= "System_uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private int id;
    private String nom;
    private String lieu;
    private int nbr_chambre;
    @OneToMany(targetEntity=Chambre.class, mappedBy="hotel", fetch=FetchType.EAGER)
    private List<Chambre> list_chambres;



    public Hotel(String nom, String lieu, int nbr_chambre) {
        this.nom = nom;
        this.lieu = lieu;
        this.nbr_chambre = nbr_chambre;

    }

    public Integer getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getLieu() {
        return lieu;
    }

    public int getNbr_chambre() {
        return nbr_chambre;
    }


    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public void setNbr_chambre(int nbr_chambre) {
        this.nbr_chambre = nbr_chambre;
    }

}

