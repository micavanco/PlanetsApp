import { IPlanet } from '../interfaces';

export class Planet implements IPlanet{
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: Array<string>;
  films: Array<string>;
  url: string;
  created: string;
  edited: string;


  constructor(name: string, diameter: string, rotation_period: string, orbital_period: string, gravity: string, population: string, climate: string, terrain: string, surface_water: string, residents: Array<string>, films: Array<string>, url: string, created: string, edited: string) {
    this.name = name;
    this.diameter = diameter;
    this.rotation_period = rotation_period;
    this.orbital_period = orbital_period;
    this.gravity = gravity;
    this.population = population;
    this.climate = climate;
    this.terrain = terrain;
    this.surface_water = surface_water;
    this.residents = residents;
    this.films = films;
    this.url = url;
    this.created = created;
    this.edited = edited;
  }
}
