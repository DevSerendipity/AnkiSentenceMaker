package com.devserendipity.springbackendtemplate.model;

import javax.persistence.*;
import java.util.Collection;


@Entity(name = "AnkiDeckCards") @Table(name = "ankiDeckCards")
public class AnkiDeck {

    @Id @SequenceGenerator(name = "anki_sequence", sequenceName = "anki_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "anki_sequence")

    @Column(name = "id") private Long id;

    @Column(name = "arabic") private String arabic;
    @Column(name = "english") private String english;

    public AnkiDeck(String arabic, String english) {
        this.arabic = arabic;
        this.english = english;
    }
    public AnkiDeck() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArabic() {
        return arabic;
    }

    public void setArabic(String arabic) {
        this.arabic = arabic;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }
}
