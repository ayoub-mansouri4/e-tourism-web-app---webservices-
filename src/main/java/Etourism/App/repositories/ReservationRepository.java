package Etourism.App.repositories;

import Etourism.App.entities.PlaceReservee;
import Etourism.App.entities.Transport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<PlaceReservee,Long> {
    public List<PlaceReservee> findPlaceReserveesByEstValidee(boolean estValidee);
    public List<PlaceReservee> findPlaceReserveesByEstAnnulee(boolean estAnnulee);




}
