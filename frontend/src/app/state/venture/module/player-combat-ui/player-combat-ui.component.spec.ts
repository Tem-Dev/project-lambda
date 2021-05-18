import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCombatUiComponent } from './player-combat-ui.component';

describe('PlayerCombatUiComponent', () => {
  let component: PlayerCombatUiComponent;
  let fixture: ComponentFixture<PlayerCombatUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCombatUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCombatUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
