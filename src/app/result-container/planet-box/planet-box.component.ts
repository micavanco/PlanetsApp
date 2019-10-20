import { Component, Input } from '@angular/core';
import { IPlanet } from '../../interfaces';

@Component({
  selector: 'app-planet-box',
  templateUrl: './planet-box.component.html',
  styleUrls: ['./planet-box.component.scss']
})
export class PlanetBoxComponent {
  @Input() planet: IPlanet;
  @Input() planetPictureURL: string;

  constructor() { }

}
