import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../shared/api/api-services.service";
import { CharactersState } from "./characters.state";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class CharactersFacade {
    constructor(
        private apiServicesService: ApiServicesService,
        private charactersState: CharactersState
    ) {}

    getCharacters(page) {
        this.charactersState.setLoading(false)

        this.apiServicesService.fnHttpGetCharacters(page)
        .pipe(finalize(() => this.charactersState.setLoading(false)))
        .subscribe(
            (res) => {
                this.charactersState.setListCharacters(res.body.results);
                this.charactersState.setPageInfo(res.body.info);
            },
            (err) => {

            }
        )
    }

    getListCharacters$(): Observable<any[]> {
        return this.charactersState.getListCharacters$();
    }
    
    getPageInfo$(): Observable<any> {
        return this.charactersState.getPageInfo$();
    }

    isLoading$(): Observable<boolean> {
        return this.charactersState.isLoading$();
    }
}