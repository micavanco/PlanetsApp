import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsService } from '../services/planets.service';
import { Subscription} from 'rxjs';
import {IPlanet} from '../interfaces';
import {Planet} from '../models/Planet';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  planetSubscribe: Subscription;
  planetPictureSubscribe: Subscription;
  planetTerrainSubscribe: Subscription;
  routerSubscribe: Subscription;
  planet: IPlanet;
  planetName: string;
  planetPicture: string;
  terrainPictures: Array<string>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private planetsService: PlanetsService) {
    this.planetPicture = '';
    this.terrainPictures = [];
    this.planet = new Planet('', '', '', '', '', '', '', '', '', [], [], '', '', '');
  }

  ngOnInit() {
    this.routerSubscribe = this.activatedRoute.paramMap.subscribe(params => {
      this.planetName = params.get('name');
      this.planetSubscribe = this.planetsService.getPlanet(this.planetName, '1').subscribe(data => {
        this.planet = data['results'][0];
      }, error => {}, () => {
        this.planetTerrainSubscribe = this.planetsService.getTerrainPicture().subscribe( data => {

          if(this.planet.terrain.split(',')[0] !== 'unknown') {
            const terrain = data[0][this.planet.terrain.split(',')[0]];
            const length = terrain['total_results'] !== 80 ? terrain['total_results'] : 80;
            for(let i = 0; i < 4; i++)
              this.terrainPictures.push(terrain['photos'][Math.floor((Math.random() * length))]['src']['tiny']);
          }

        });
      });
      this.planetPictureSubscribe = this.planetsService.getPlanetPicture().subscribe(data => {
        this.planetPicture = data[0][this.planetName];
      });
    });
  }

  ngOnDestroy() {
    this.planetPictureSubscribe.unsubscribe();
    this.planetTerrainSubscribe.unsubscribe();
    this.planetSubscribe.unsubscribe();
    this.routerSubscribe.unsubscribe();
  }

  onGoingBack() {
    this.router.navigate(['']);
  }

}
