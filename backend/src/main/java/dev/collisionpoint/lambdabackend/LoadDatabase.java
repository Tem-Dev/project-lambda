package dev.collisionpoint.lambdabackend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(CharacterRepository repository) {
        return args -> {
            log.info("Preloading " + repository.save(new Character("El Testo", 100, 100)));
            log.info("Preloading " + repository.save(new Character("Vlad Testovic", 120, 75)));
        };
    }
}
