package dev.collisionpoint.lambdabackend.rest.character;

import dev.collisionpoint.lambdabackend.db.CharacterRepository;
import dev.collisionpoint.lambdabackend.domain.model.Character;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/characters")
public class CharacterController {

    private final CharacterRepository repository;

    public CharacterController(CharacterRepository repository) {
        this.repository = repository;
    }

    @PostMapping()
    public Character createCharacter(@RequestBody Character newCharacter) {
        return repository.save(newCharacter);
    }

    @GetMapping("/{id}")
    public Character getCharacterById(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new CharacterNotFoundException(id));
    }

    @PutMapping("/{id}")
    public Character updateCharacter(@RequestBody Character newCharacter, @PathVariable Long id) {
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

    @DeleteMapping("/{id}")
    public void deleteCharacter(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
