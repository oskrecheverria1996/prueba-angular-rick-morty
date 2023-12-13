import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { CharactersModule } from './characters/characters.module';
import { LocationsModule } from "./locations/locations.module";
import { EpisodesModule } from "./episodes/episodes.module";
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    CharactersModule,
    LocationsModule,
    EpisodesModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
