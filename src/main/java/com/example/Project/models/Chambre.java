package com.example.Project.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table
@NoArgsConstructor
public class Chambre {
    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String id;
    private int num_chambre;
    private String cin_touriste;
    private String type_chambre;
    private boolean etat_chambre;
    private int prix;

    public Chambre(int num_chambre, String cin_touriste, String type_chambre, boolean etat_chambre, int prix) {
        this.num_chambre = num_chambre;
        this.cin_touriste = cin_touriste;
        this.type_chambre = type_chambre;
        this.etat_chambre = etat_chambre;
        this.prix = prix;
    }

    public String getId() {
        return id;
    }

    public int getNum_chambre() {
        return num_chambre;
    }

    public String getCin_touriste() {
        return cin_touriste;
    }

    public String getType_chambre() {
        return type_chambre;
    }

    public boolean getEtat_chambre() {
        return etat_chambre;
    }

    public int getPrix() {
        return prix;
    }

    public void setNum_chambre(int num_chambre) {
        this.num_chambre = num_chambre;
    }

    public void setCin_touriste(String cin_touriste) {
        this.cin_touriste = cin_touriste;
    }

    public void setType_chambre(String type_chambre) {
        this.type_chambre = type_chambre;
    }

    public void setEtat_chambre(boolean etat_chambre) {
        this.etat_chambre = etat_chambre;
    }

    public void setPrix(int prix) {
        this.prix = prix;
    }
}