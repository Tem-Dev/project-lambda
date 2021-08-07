package dev.collisionpoint.lambdabackend.db;

import dev.collisionpoint.lambdabackend.domain.model.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Character, Long> {

}
