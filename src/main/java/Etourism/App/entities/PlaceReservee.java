package Etourism.App.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name ="PlacesReservees")
public class PlaceReservee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   @Column(nullable = false)
    private String cin_user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_transport", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "placeReservees"})
    private Transport transport;

    private boolean estValidee;
    private  boolean estAnnulee;



    public PlaceReservee(){}

    public PlaceReservee(Transport transport, String cin_user,boolean estValidee,boolean estAnnulee) {
        this.estAnnulee=estAnnulee;
        this.estValidee=estValidee;
        this.transport = transport;
        this.cin_user = cin_user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isEstValidee() {
        return estValidee;
    }

    public void setEstValidee(boolean estValider) {
        this.estValidee = estValider;
    }
    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transport) {
        this.transport = transport;
    }

    public String getCin_user() {
        return cin_user;
    }

    public void setCin_user(String cin_user) {
        this.cin_user = cin_user;
    }

    public boolean isEstAnnulee() {
        return estAnnulee;
    }

    public void setEstAnnulee(boolean estAnnulee) {
        this.estAnnulee = estAnnulee;
    }

    @Override
    public String toString() {
        return "PlaceReservee{" +
                "id=" + id +
                ", cin_user='" + cin_user + '\'' +
                ", transport=" + transport +
                '}';
    }
}
