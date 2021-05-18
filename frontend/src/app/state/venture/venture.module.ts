import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureComponent } from './venture.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BackendInterceptor} from "./service/player/backend/backend-mock";
import { PlayerCombatUiComponent } from './module/player-combat-ui/player-combat-ui.component';
import { AbilityUiComponent } from './module/player-combat-ui/component/ability-ui/ability-ui.component';
import { PlayerUiComponent } from './module/player-combat-ui/component/player-ui/player-ui.component';



@NgModule({
  declarations: [
      VentureComponent,
      PlayerCombatUiComponent,
      AbilityUiComponent,
      PlayerUiComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  exports: [
      VentureComponent
  ],
  imports: [
      CommonModule
  ]
})
export class VentureModule { }
