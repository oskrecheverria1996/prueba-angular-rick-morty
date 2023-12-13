import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbDialogModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { EpisodesFacade } from "./episodes.facade";
import { EpisodesState } from "./episodes.state";
import { EpisodesComponent } from './episodes.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { SingleLocationComponent } from './single-location/single-location.component';


@NgModule({
  declarations: [
    EpisodesComponent
  ],
  providers: [
    EpisodesFacade,
    EpisodesState
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbDialogModule.forChild(),
    NgxPaginationModule,
  ]
})
export class EpisodesModule { }
