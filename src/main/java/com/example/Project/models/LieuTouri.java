package com.example.Project.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
@Data
@Entity
@Table
@NoArgsConstructor
public class LieuTouri {
    @Id
    @GeneratedValue(generator= "System_uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private int id;
    private String nom;
    private String lieu;

    public LieuTouri(int id, String nom, String lieu) {
        this.id = id;
        this.nom = nom;
        this.lieu = lieu;
    }

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getLieu() {
        return lieu;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }
}
