package Etourism.App.repositories;

import Etourism.App.entities.Gerant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GerantRepository extends JpaRepository<Gerant,Long> {
    public Gerant findGerantByEmailAndPassword(String email,String password);
}
