import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesApiP2Component } from './games-api-p2.component';

describe('GamesApiP2Component', () => {
  let component: GamesApiP2Component;
  let fixture: ComponentFixture<GamesApiP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesApiP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesApiP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
