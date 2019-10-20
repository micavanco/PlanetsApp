import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'planet/:name', component: PlanetDetailsComponent},
  {path: 'search/:search', component: MainPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
