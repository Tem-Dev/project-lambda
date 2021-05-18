import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Ability, PlayerState} from "./player-state";

@Injectable({
  providedIn: 'root'
})
export class PlayerStateService {

  $playerState: Observable<PlayerState> = of();
  get playerState() { return this.$playerState }

  actionInitPlayerState() {
    this.$playerState = this.httpClient.get<PlayerState>("http://localhost:4200:/init/playerState");
  }

  effectPlayerAbilities(): Observable<Ability[]> {
    return this.httpClient.get<Ability[]>("http://localhost:4200:/player-skills");
  }

  getPlayerState() {

  }

  constructor(private httpClient: HttpClient) {
    this.actionInitPlayerState();
  }
}
