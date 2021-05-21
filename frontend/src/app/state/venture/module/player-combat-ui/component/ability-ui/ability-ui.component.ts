import {Component, Input, OnInit} from '@angular/core';
import {Ability} from "../../../../service/player/player-state";

@Component({
  selector: 'cp-ability-ui',
  templateUrl: './ability-ui.component.html',
  styleUrls: ['./ability-ui.component.scss']
})
export class AbilityUiComponent implements OnInit {
  @Input() ability: Ability;

  constructor() { }

  ngOnInit(): void {
  }

}
