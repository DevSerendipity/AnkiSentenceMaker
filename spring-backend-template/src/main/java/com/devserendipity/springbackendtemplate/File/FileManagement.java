package com.devserendipity.springbackendtemplate.File;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.FileSystemNotFoundException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Stream;

public class FileManagement {
    private final HashMap<String,String> ankiDeck = new HashMap<>();

    public HashMap<String,String> getAnkiCardsRows() {
        return ankiDeck;
    }

    public void addAllAnkiCards() {
        URL url = FileManagement.class.getResource("/deck.csv");
        Path path;
        try {
             path = Paths.get(url.toURI());
        } catch ( URISyntaxException e ) {
            throw new RuntimeException(e);
        }

        try (Stream<String> s = Files.lines(path)) {
            List<String> words = s.toList();
            for (String st : words ) {
                String[] splitString = st.split(",");
                ankiDeck.put(splitString[0].trim(), splitString[1]);
            }
        } catch (IOException e) {
            throw new FileSystemNotFoundException("The file could not be found, check the file or adjust the location");
        }
    }
}
