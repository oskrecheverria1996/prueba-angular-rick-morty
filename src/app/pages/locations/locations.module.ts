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
import { LocationsFacade } from "./locations.facade";
import { LocationsState } from "./locations.state";
import { LocationsComponent } from './locations.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SingleLocationComponent } from './single-location/single-location.component';

@NgModule({
  declarations: [
    LocationsComponent,
    SingleLocationComponent
  ],
  providers: [
    LocationsFacade,
    LocationsState
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
export class LocationsModule { }
