import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { IPlanet } from '../interfaces';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private httpClient: HttpClient) { }

  transformToPlanet(data: Object)
  {
    return {
      name: data['name'],
      diameter: data['diameter'],
      rotation_period: data['rotation_period'],
      orbital_period: data['orbital_period'],
      gravity: data['gravity'],
      population: data['population'],
      climate: data['climate'],
      terrain: data['terrain'],
      surface_water: data['surface_water'],
      residents: data['residents'],
      films: data['films'],
      url: data['url'],
      created: data['created'],
      edited: data['edited']
    };
  }

  getPlanets()
  {
    return this.httpClient.get<Array<IPlanet>>(
      environment.planetsUrl + '/planets'
    );
  }

  getPlanet(search: string)
  {
    return this.httpClient.get<Array<IPlanet>>(
      environment.planetsUrl + '/planets?search=' + search, {
        // headers: {
        //   'access-control-allow-origin' : '*',
        //   'Content-type': 'application/json; charset=UTF-8',
        //   'Access-Control-Allow-Headers': '*'
        // }
      }
    );
  }
}
