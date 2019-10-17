import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule } from '@angular/material';
import { ResultContainerComponent } from './result-container/result-container.component';
import { PlanetBoxComponent } from './result-container/planet-box/planet-box.component';
import { PlanetsService } from './services/planets.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MainPageComponent,
    ResultContainerComponent,
    PlanetBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
