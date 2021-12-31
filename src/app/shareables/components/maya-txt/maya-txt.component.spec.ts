import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mayaTxtComponent } from './maya-txt.component';

describe('mayaTxtComponent', () => {
  let component: mayaTxtComponent;
  let fixture: ComponentFixture<mayaTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mayaTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mayaTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
