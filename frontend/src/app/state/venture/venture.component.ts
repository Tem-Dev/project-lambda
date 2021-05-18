import { Component, OnInit } from '@angular/core';
import {PlayerStateService} from "./service/player/player-state.service";
import {Ability, PlayerState} from "./service/player/player-state";
import { Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'cp-venture',
  templateUrl: './venture.component.html',
  styleUrls: ['./venture.component.scss']
})
export class VentureComponent {
  $playerState: Observable<PlayerState> = this.pss.playerState;
  $playerAbilities: Observable<Ability[]> = this.pss.effectPlayerAbilities();

  constructor(private pss: PlayerStateService) {}
}
