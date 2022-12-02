package com.devserendipity.springbackendtemplate.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service public class AnkiDeckService {
    private final AnkiDeckRepository ankiDeckRepository;

    @Autowired public AnkiDeckService( AnkiDeckRepository ankiDeckRepository) {
        this.ankiDeckRepository = ankiDeckRepository;
    }

    public List<AnkiDeck> getAllAnkiDecks() {
        return ankiDeckRepository.findAll();
    }

    public void addNewAnkiDeck( AnkiDeck ankiDeck) {
        /*if ( emailExists( user.getEmail() ) ) {
            throw new IllegalStateException( "email taken" );
        }*/
        ankiDeckRepository.save(ankiDeck);
    }

    public AnkiDeck getAnkiDeckById( Long ankiDeckId ) {
        return  ankiDeckRepository.findById(ankiDeckId).orElseThrow(() -> new IllegalArgumentException("anki deck with id:" + ankiDeckId + " does not exist."));
    }


    /*private boolean emailExists( String email ) {
        return userRepository.findClientByEmail(email ) != null;
    }*/

    public void deleteAnkiDeck( Long ankiDeckId ) {
        boolean ankiDeckExists = ankiDeckRepository.existsById(ankiDeckId );
        if ( !ankiDeckExists ) {
            throw new IllegalStateException( "anki deck with id:" + ankiDeckId + " does not exist." );
        }
        ankiDeckRepository.deleteById(ankiDeckId );
    }

    @Transactional public AnkiDeck updateAnkiDeck( AnkiDeck newAnkiDeck, Long ankiDeckId ) {
        return ankiDeckRepository.findById(ankiDeckId)
                                 .map(ankiDeck -> {
                                     ankiDeck.setArabic(newAnkiDeck.getArabic());
                                     ankiDeck.setEnglish(newAnkiDeck.getEnglish());
                                 return ankiDeckRepository.save(ankiDeck);
                             }).orElseThrow(() -> new IllegalArgumentException("Anki Deck by id " + ankiDeckId + " "
                                                                                                                        + "not "
                                                                                                                        + "found."));
    }
}
