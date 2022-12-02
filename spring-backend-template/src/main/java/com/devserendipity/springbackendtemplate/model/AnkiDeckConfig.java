package com.devserendipity.springbackendtemplate.model;

import com.devserendipity.springbackendtemplate.File.FileManagement;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Configuration public class AnkiDeckConfig {
    private static final FileManagement fileManagement = new FileManagement();

    @Bean CommandLineRunner commandLineRunner(AnkiDeckRepository ankiDeckRepository) {
/*int getLastClientById = ankiDeckRepository.findClientById();*/

        fileManagement.addAllAnkiCards();
        System.out.println("START");
        return args -> {
       /*     ankiDeckRepository.deleteAll();*/
/*            for ( Map.Entry<String, String> ankiRows: fileManagement.getAnkiCardsRows().entrySet() ) {
                ankiDeckRepository.saveAll(List.of(new AnkiDeck(ankiRows.getKey(), ankiRows.getValue())));
            }*/
        };
    }
}


