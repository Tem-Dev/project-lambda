export interface PlayerState {
  player: Player;
  loading: boolean;
}

export interface Player {
  name: string;
  class: string;
  abilities: Ability[];
  hp: number;
  mp: number;
  statusEffects: string[];
}

export interface Ability {
  name: string,
  description: string,
  damageType: string,
  damageMultiplier: string;
}
