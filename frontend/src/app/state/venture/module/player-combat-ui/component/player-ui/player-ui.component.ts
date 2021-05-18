import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../../service/player/player-state";

@Component({
  selector: 'cp-player-ui',
  templateUrl: './player-ui.component.html',
  styleUrls: ['./player-ui.component.scss']
})
export class PlayerUiComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
