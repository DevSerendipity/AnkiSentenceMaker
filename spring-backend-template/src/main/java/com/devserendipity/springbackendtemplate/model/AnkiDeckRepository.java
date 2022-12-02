package com.devserendipity.springbackendtemplate.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository public interface AnkiDeckRepository extends JpaRepository<AnkiDeck, Long> {

/*
    @Query("SELECT c FROM Client c WHERE c.email = ?1") User findClientByEmail( String email );
*/
/*
    @Query(value = "SELECT MAX(id) FROM data_visualization", nativeQuery = true) int findClientById();
*/


}
