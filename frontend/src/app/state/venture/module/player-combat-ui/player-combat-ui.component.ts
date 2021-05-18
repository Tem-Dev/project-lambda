import {Component, Input} from '@angular/core';
import {PlayerState} from "../../service/player/player-state";

@Component({
  selector: 'cp-player-combat-ui',
  templateUrl: './player-combat-ui.component.html',
  styleUrls: ['./player-combat-ui.component.scss']
})
export class PlayerCombatUiComponent {
  @Input() playerState: PlayerState = null;

  constructor() { }
}
