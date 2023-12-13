import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from "./locations/locations.component";
import { EpisodesComponent } from "./episodes/episodes.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'characters',
      component: CharactersComponent,
    },
    {
      path: 'locations',
      component: LocationsComponent,
    },
    {
      path: 'episodes',
      component: EpisodesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
