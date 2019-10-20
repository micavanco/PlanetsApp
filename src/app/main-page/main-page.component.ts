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
  planetsPictures: object;
  isLoading: boolean;
  selectedPage: string;
  planetFound: boolean;

  constructor(private planetsService: PlanetsService) {
    this.searchTerm = '';
    this.planets = [];
    this.planetsNames = [];
    this.selectedPage = '1';
    this.planetFound = true;
  }

  ngOnInit() {
    this.planetsService.getPlanetPicture().subscribe(data => this.planetsPictures = data[0]);
  }

  onSearchTermChanged() {
    this.planets = [];
    this.isLoading = true;
    this.planetFound = true;
    this.selectedPage = '1';
    this.getPlanetsData();
  }

  getPlanetsData() {
    this.planetsService.getPlanet(this.searchTerm, this.selectedPage).subscribe(data => {
        this.planetsNames = [];
        this.planets.push(...data['results'].filter(e => e.name !== 'unknown'));
        this.planetsNames.push(...this.planets.map(e => e.name));

        if (data['next']) {
          this.selectedPage = data['next'][data['next'].length - 1];
          this.getPlanetsData();
        }
      },
      error => error, () => { this.isLoading = false; this.planetFound = this.planets.length !== 0; });
  }

}
