package Etourism.App;

import Etourism.App.entities.Gerant;
import Etourism.App.repositories.GerantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class DataInit implements CommandLineRunner {
    @Autowired
    GerantRepository gerantRepository;

    @Override
    public void run(String... args) throws Exception {
        gerantRepository.save(new Gerant("Ayoub","MANSOURI","2022@gerant.com","1234"));
    }
}
