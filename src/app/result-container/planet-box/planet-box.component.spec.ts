import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetBoxComponent } from './planet-box.component';

describe('PlanetBoxComponent', () => {
  let component: PlanetBoxComponent;
  let fixture: ComponentFixture<PlanetBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
