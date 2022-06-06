package Etourism.App.repositories;

import Etourism.App.entities.PlaceReservee;
import Etourism.App.entities.Transport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransportRepository extends JpaRepository<Transport,Long> {

}
