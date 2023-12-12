import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
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
import { CharactersFacade } from "./characters.facade";
import { CharactersState } from "./characters.state";
import { SingleCharacterComponent } from './single-character/single-character.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CharactersComponent,
    SingleCharacterComponent
  ],
  providers: [
    CharactersFacade,
    CharactersState
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
export class CharactersModule { }
