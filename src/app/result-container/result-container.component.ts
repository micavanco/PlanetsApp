import {Component, Input } from '@angular/core';
import { IPlanet } from '../interfaces';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent {
  @Input() planets: Array<IPlanet>;

  constructor() { }

}
