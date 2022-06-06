package Etourism.App.Services;

import Etourism.App.entities.Transport;
import Etourism.App.repositories.TransportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GererTransport implements GererTransportInterface {
    @Autowired
    private TransportRepository transportRepository;
    @Override
    public Transport ajouterTransport(Transport transport) {
        return transportRepository.save(transport);
    }

    @Override
    public void supprimerTransport(Long id) {
        transportRepository.deleteById(id);
    }
}
