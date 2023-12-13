import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { EpisodesFacade } from "./episodes.facade";
import { NbDialogService } from '@nebular/theme';
// import { SingleCharacterComponent } from "./single-character/single-character.component";
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'ngx-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  subscription: Subscription = new Subscription();
  listResult$: Observable<{}>;
  pageInfo$: Observable<any>;
  isLoading$: Observable<boolean>
  totalItems: number = 0;
  current_page = 1;
  
  constructor(
    private episodesFacade: EpisodesFacade,
    private dialogService: NbDialogService
  ) { 
    this.pageInfo$ = this.episodesFacade.getPageInfo$();
    this.listResult$ = this.episodesFacade.getListEpisodes$();
    this.isLoading$ = this.episodesFacade.isLoading$();
    this.subscription.add(
      this.episodesFacade.getEpisodes(this.current_page)
    )
  }


  ngOnInit(): void {
    this.pageInfo$.pipe(pluck('count')).subscribe(
      (res) => {
        this.totalItems = res;
      }
    )
  }

  
  openCharacter(character) {
    // this.dialogService.open(SingleCharacterComponent, {
    //   context: {character},
    // });
  }

  changePage(event) {
    this.current_page = event;
    this.episodesFacade.getEpisodes(this.current_page);
  }
}
