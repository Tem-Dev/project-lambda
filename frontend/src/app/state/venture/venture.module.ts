import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureComponent } from './venture.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BackendInterceptor} from "./service/player/backend/backend-mock";



@NgModule({
  declarations: [
      VentureComponent
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
