import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../shared/api/api-services.service";
import { EpisodesState } from "./episodes.state";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class EpisodesFacade {
    constructor(
        private apiServicesService: ApiServicesService,
        private episodesState: EpisodesState
    ) {}

    getEpisodes(page) {
        this.episodesState.setLoading(false)

        this.apiServicesService.fnHttpGetEpisodes(page)
        .pipe(finalize(() => this.episodesState.setLoading(false)))
        .subscribe(
            (res) => {
                this.episodesState.setListEpisodes(res.body.results);
                this.episodesState.setPageInfo(res.body.info);
            },
            (err) => {

            }
        )
    }

    getListEpisodes$(): Observable<any[]> {
        return this.episodesState.getListEpisodes$();
    }
    
    getPageInfo$(): Observable<any> {
        return this.episodesState.getPageInfo$();
    }

    isLoading$(): Observable<boolean> {
        return this.episodesState.isLoading$();
    }
}