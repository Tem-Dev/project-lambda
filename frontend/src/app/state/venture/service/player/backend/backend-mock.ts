import {Injectable, Injector} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {abilityList} from "./data/ability-list";
import {Ability, PlayerState} from "../player-state";

const userAbilities: Ability[] = [
  abilityList[Math.floor(Math.random() * 20) ],
  abilityList[Math.floor(Math.random() * 20) ],
  abilityList[Math.floor(Math.random() * 20) ],
  abilityList[Math.floor(Math.random() * 20) ],
  abilityList[Math.floor(Math.random() * 20) ],
  abilityList[Math.floor(Math.random() * 20) ],
];

const playerState: PlayerState = {
  loading: false,
  player: {
    name: 'Deoxynum',
    class: 'Tank Support',
    abilities: userAbilities,
    hp: 250,
    maxHp: 250,
    mp: 100,
    maxMp: 100,
    statusEffects: []
  }
}
// const data

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.method === "GET" && request.url.endsWith('/playerSkills')) {
      return new Observable(observer => {
        observer.next(new HttpResponse<Ability[]>({status: 200, body: userAbilities }));
        observer.complete();
      });
    }
    if(request.method === "GET" && request.url.endsWith('/init/playerState')) {
      return new Observable(observer => {
        observer.next(new HttpResponse<PlayerState>({status: 200, body: playerState }));
        observer.complete();
      });
    }
    return next.handle(request);
  }
}
