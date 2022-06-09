package Etourism.App.entities;

import javax.persistence.*;

@Entity
@Table(name = "gerant")
public class Gerant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_gerant;
    @Column(unique = true)
    private String first_name;
    private String last_name;
    private String email;
    private String password;

    public Gerant(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public Gerant(){}

    public Long getId_gerant() {
        return id_gerant;
    }

    public void setId_gerant(Long id_gerant) {
        this.id_gerant = id_gerant;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public Gerant(String first_name, String last_name, String email, String password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

}
