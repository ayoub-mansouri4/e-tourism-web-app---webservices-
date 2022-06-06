package Etourism.App.Services;

import Etourism.App.entities.Transport;

public interface GererTransportInterface {
    public Transport ajouterTransport(Transport transport);
    public void supprimerTransport(Long id);
}
