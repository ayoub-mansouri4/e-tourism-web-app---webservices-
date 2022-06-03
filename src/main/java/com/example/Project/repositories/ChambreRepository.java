package com.example.Project.repositories;

import com.example.Project.models.Chambre;
import com.example.Project.models.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChambreRepository extends JpaRepository<Chambre,Integer> {

}
