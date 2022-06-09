package Etourism.App.repositories;

import Etourism.App.entities.PlaceReservee;
import Etourism.App.entities.Transport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransportRepository extends JpaRepository<Transport,Long> {
    @Query("select tr from Transport tr where tr.lieu_depart=?1 or tr.type=?2 or tr.date_depart=?3 or tr.prix<=?4")
    public List<Transport> findTransportByLieu_departOrTypeOrDate_departOrPrixLessThanEqual(String lieu_depart,String type,String date_depart,int prix);

}
