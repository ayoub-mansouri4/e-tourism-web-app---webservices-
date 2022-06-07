package com.example.Project.repositories;

import com.example.Project.models.Chambre;
import com.example.Project.models.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChambreRepository extends JpaRepository<Chambre,Integer> {

   @Query("SELECT type_chambre,prix FROM chambre r where r.hotel_id = :id")
   List<String> findchambrebyhotel(@Param("id") Integer id);


}
