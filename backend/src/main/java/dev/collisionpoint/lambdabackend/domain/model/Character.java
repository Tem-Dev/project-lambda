package dev.collisionpoint.lambdabackend.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Character {

    @Id @GeneratedValue
    private Long id;

    private String name;
    private int maxHp;
    private int maxMp;

    public Character() {
    }

    public Character(String name, int maxHp, int maxMp) {
        this.name = name;
        this.maxHp = maxHp;
        this.maxMp = maxMp;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxHp() {
        return maxHp;
    }

    public void setMaxHp(int maxHp) {
        this.maxHp = maxHp;
    }

    public int getMaxMp() {
        return maxMp;
    }

    public void setMaxMp(int maxMp) {
        this.maxMp = maxMp;
    }

    @Override
    public String toString() {
        String d = " | ";
        return "Character { name: " + this.name + d + "id: " + this.id + d + "maxHp: " + this.maxHp + d + "maxMp: " + this.maxMp + "  }";
    }
}
