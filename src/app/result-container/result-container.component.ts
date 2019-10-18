import { Component, Input, OnInit } from '@angular/core';
import { IPlanet } from '../interfaces';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {
  @Input() planets: Array<IPlanet>;
  planetsModified: Array<IPlanet>;
  indexFrom: number;
  indexTo: number;

  constructor() {
    this.indexFrom = 0;
    this.indexTo = 10;
  }

  ngOnInit(): void {
    this.planetsModified = this.planets.filter((e, i) => i >= this.indexFrom && i <= this.indexTo);
  }

  onPageChanged(e) {
    const pageIndex = e.pageIndex;
    const pageSize = e.pageSize;

    this.indexFrom = pageIndex * pageSize;
    this.indexTo = this.indexFrom + pageSize;

    // tslint:disable-next-line:no-shadowed-variable
    this.planetsModified = this.planets.filter((e, i) => i >= this.indexFrom && i < this.indexTo);
  }

}
