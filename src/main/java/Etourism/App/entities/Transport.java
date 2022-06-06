package Etourism.App.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "transports")
public class Transport implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_transport;
    private String type;
    private int nbr_places;
    private String date_depart;
    private String temps_depart;
    private String lieu_depart;
    private String lieu_arrive;
    private int prix;
    private int nbr_places_reservees;

    @OneToMany(mappedBy = "transport",fetch = FetchType.LAZY,orphanRemoval = true)
    @JsonIgnoreProperties("transport")
    private List<PlaceReservee> placeReservees=new ArrayList<>();


    public Transport(){}

    public Transport(int nbr_places, int nbr_places_reservees) {
        this.nbr_places = nbr_places;
        this.nbr_places_reservees = nbr_places_reservees;
    }

    public Transport(String type, int nbr_places, String date_depart, String temps_depart, String lieu_depart, String lieu_arrive, int prix) {
        this.type = type;
        this.nbr_places = nbr_places;
        this.date_depart = date_depart;
        this.temps_depart = temps_depart;
        this.lieu_depart = lieu_depart;
        this.lieu_arrive = lieu_arrive;
        this.prix = prix;
    }

    public Long getId_transport() {
        return id_transport;
    }

    public void setId_transport(Long id_transport) {
        this.id_transport = id_transport;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getNbr_places() {
        return nbr_places;
    }

    public void setNbr_places(int nbr_places) {
        this.nbr_places = nbr_places;
    }

    public String getDate_depart() {
        return date_depart;
    }

    public void setDate_depart(String date_depart) {
        this.date_depart = date_depart;
    }

    public String getTemps_depart() {
        return temps_depart;
    }

    public void setTemps_depart(String temps_depart) {
        this.temps_depart = temps_depart;
    }

    public String getLieu_depart() {
        return lieu_depart;
    }

    public void setLieu_depart(String lieu_depart) {
        this.lieu_depart = lieu_depart;
    }

    public String getLieu_arrive() {
        return lieu_arrive;
    }

    public void setLieu_arrive(String lieu_arrive) {
        this.lieu_arrive = lieu_arrive;
    }

    public int getPrix() {
        return prix;
    }

    public void setPrix(int prix) {
        this.prix = prix;
    }

    public int getNbr_places_reservees() {
        return nbr_places_reservees;
    }

    public void setNbr_places_reservees(int nbr_places_reservees) {
        this.nbr_places_reservees = nbr_places_reservees;
    }

    public List<PlaceReservee> getPlaceReservees() {
        return placeReservees;
    }

    public void setPlaceReservees(List<PlaceReservee> placeReservees) {
        this.placeReservees = placeReservees;
    }

    @Override
    public String toString() {
        return "Transport{" +
                "id_transport=" + id_transport +
                ", type='" + type + '\'' +
                ", nbr_places=" + nbr_places +
                ", date_depart=" + date_depart +
                ", temps_depart=" + temps_depart +
                ", lieu_depart='" + lieu_depart + '\'' +
                ", lieu_arrive='" + lieu_arrive + '\'' +
                ", prix=" + prix +
                ", nbr_places_reservees=" + nbr_places_reservees +
                ", placeReservees=" + placeReservees +
                '}';
    }
}

