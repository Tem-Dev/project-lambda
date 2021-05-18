import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityUiComponent } from './ability-ui.component';

describe('AbilityUiComponent', () => {
  let component: AbilityUiComponent;
  let fixture: ComponentFixture<AbilityUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
