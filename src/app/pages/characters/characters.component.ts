import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { CharactersFacade } from "./characters.facade";
import { NbDialogService } from '@nebular/theme';
import { SingleCharacterComponent } from "./single-character/single-character.component";
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'ngx-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  subscription: Subscription = new Subscription();
  listResult$: Observable<{}>;
  pageInfo$: Observable<any>;
  isLoading$: Observable<boolean>
  totalItems: number = 0;
  current_page = 1;
  
  constructor(
    private charactersFacade: CharactersFacade,
    private dialogService: NbDialogService
  ) { 
    this.pageInfo$ = this.charactersFacade.getPageInfo$();
    this.listResult$ = this.charactersFacade.getListCharacters$();
    this.isLoading$ = this.charactersFacade.isLoading$();
    this.subscription.add(
      this.charactersFacade.getCharacters(this.current_page)
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
    this.dialogService.open(SingleCharacterComponent, {
      context: {character},
    });
  }

  changePage(event) {
    this.current_page = event;
    this.charactersFacade.getCharacters(this.current_page);
  }
  
}
