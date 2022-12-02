package com.devserendipity.springbackendtemplate.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AnkiDeckController {
    @Autowired
    private final AnkiDeckService ankiDeckService;

    public AnkiDeckController(AnkiDeckService ankiDeckService) {
        this.ankiDeckService = ankiDeckService;
    }

    @GetMapping("/ankiDecks") public List<AnkiDeck> getAllAnkiDecks() {
        return ankiDeckService.getAllAnkiDecks();
    }

    @GetMapping("/ankiDeck/{id}") AnkiDeck getAnkiDeckById(@PathVariable Long id) {
        return ankiDeckService.getAnkiDeckById(id);
    }

    @PostMapping("/ankiDeck") public void newAnkiDeck(@RequestBody AnkiDeck ankiDeck) {
        ankiDeckService.addNewAnkiDeck(ankiDeck);
    }

    @DeleteMapping(path = "/ankiDeck/{ankiDeckId}") public void deleteAnkiDeck(@PathVariable("ankiDeckId") Long id) {
        ankiDeckService.deleteAnkiDeck(id);
    }

    @PutMapping("/ankiDeck/{id}") AnkiDeck updateAnkiDeck(@RequestBody AnkiDeck newAnkiDeck, @PathVariable Long id) {
        return ankiDeckService.updateAnkiDeck(newAnkiDeck, id);
    }
}
