import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAPIComponent } from './games-api.component';

describe('GamesAPIComponent', () => {
  let component: GamesAPIComponent;
  let fixture: ComponentFixture<GamesAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
