import { Component, OnInit } from '@angular/core';
import {Ability} from "./dto/ability";

@Component({
  selector: 'cp-venture',
  templateUrl: './venture.component.html',
  styleUrls: ['./venture.component.scss']
})
export class VentureComponent implements OnInit {

  playerAbilities: Ability[] = [
    {
      name: 'Fireball',
      damageType: 'fire',
      damageMultiplier: 1
    },
    {
      name: 'Fire Ward',
      damageType: 'fire',
      damageMultiplier: 1
    },
    {
      name: 'Gentle Flame',
      damageType: 'fire',
      damageMultiplier: 1
    },
    {
      name: 'Ice Shard',
      damageType: 'ice',
      damageMultiplier: 1
    },
    {
      name: 'Barrier of Ice',
      damageType: 'ice',
      damageMultiplier: 1
    },
    {
      name: 'Freezing Point ',
      damageType: 'ice',
      damageMultiplier: 1
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
