import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../services/planets.service';
import {IPlanet} from '../interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  searchTerm: string;
  planets: Array<IPlanet>;
  planetsNames: Array<string>;
  isLoading: boolean;

  constructor(private planetsService: PlanetsService) {
    this.searchTerm = '';
    this.planets = [];
  }

  ngOnInit() {
  }

  onSearchTermChanged() {
    console.log(this.searchTerm);
    this.planets = [];
    this.isLoading = true;
    this.planetsService.getPlanet(this.searchTerm).subscribe(data => {
      this.planets = data['results'];
      this.planetsNames = this.planets.map(e => e.name);
      },
      error => error, () => {this.isLoading = false;});
  }

}
