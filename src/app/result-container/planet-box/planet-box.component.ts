import {Component, Input, OnInit} from '@angular/core';
import {IPlanet} from '../../interfaces';

@Component({
  selector: 'app-planet-box',
  templateUrl: './planet-box.component.html',
  styleUrls: ['./planet-box.component.scss']
})
export class PlanetBoxComponent implements OnInit {
  @Input() planet: IPlanet;
  @Input() planetPictureURL: string;

  constructor() { }

  ngOnInit() {
  }

}
