import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Ability, PlayerState} from "./player-state";

@Injectable({
  providedIn: 'root'
})
export class PlayerStateService {

  $playerState: Observable<PlayerState> = this.actionInitPlayerState();

  actionInitPlayerState() {
    return this.httpClient.get<PlayerState>("http://localhost:4200:/init/playerState");
  }

  constructor(private httpClient: HttpClient) {}



  effectPlayerAbilities(): Observable<Ability[]> {
    return this.httpClient.get<Ability[]>("http://localhost:4200:/player-skills");
  }

  getPlayerState() {

  }
}
