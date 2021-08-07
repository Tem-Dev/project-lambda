package dev.collisionpoint.lambdabackend;

import org.springframework.web.bind.annotation.*;

@RestController
public class CharacterController {

    private final CharacterRepository repository;

    CharacterController(CharacterRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/characters")
    Character createCharacter(@RequestBody Character newCharacter) {
        return repository.save(newCharacter);
    }

    @GetMapping("/characters/{id}")
    Character getCharacterById(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new CharacterNotFoundException(id));
    }

    @PutMapping("/characters/{id}")
    Character updateCharacter(@RequestBody Character newCharacter, @PathVariable Long id) {
    return repository.findById(id)
            .map(character -> {
                character.setName(newCharacter.getName());
                return repository.save(character);
            })
            .orElseGet(() -> {
                newCharacter.setId(id);
                return repository.save(newCharacter);
            });
    }

    @DeleteMapping("/characters/{id}")
    void deleteCharacter(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
