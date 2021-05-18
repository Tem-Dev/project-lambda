import { Component, OnInit } from '@angular/core';
import {PlayerStateService} from "./service/player/player-state.service";
import {Ability} from "./service/player/player-state";
import { Observable} from "rxjs";

@Component({
  selector: 'cp-venture',
  templateUrl: './venture.component.html',
  styleUrls: ['./venture.component.scss']
})
export class VentureComponent implements OnInit {

  $playerAbilities: Observable<Ability[]> = this.pss.effectPlayerAbilities();

  constructor(private pss: PlayerStateService) { }

  ngOnInit(): void {
    this.$playerAbilities = this.pss.effectPlayerAbilities();
  }

}
