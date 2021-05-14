import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqComponent } from './hq.component';

describe('HqComponent', () => {
  let component: HqComponent;
  let fixture: ComponentFixture<HqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
