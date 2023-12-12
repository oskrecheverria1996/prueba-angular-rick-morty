import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../shared/api/api-services.service";
import { LocationsState } from "./locations.state";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class LocationsFacade {
    constructor(
        private apiServicesService: ApiServicesService,
        private locationsState: LocationsState
    ) {}

    getLocations(page) {
        this.locationsState.setLoading(false)

        this.apiServicesService.fnHttpGetLocations(page)
        .pipe(finalize(() => this.locationsState.setLoading(false)))
        .subscribe(
            (res) => {
                this.locationsState.setListLocations(res.body.results);
                this.locationsState.setPageInfo(res.body.info);
            },
            (err) => {

            }
        )
    }

    getListLocations$(): Observable<any[]> {
        return this.locationsState.getListLocations$();
    }
     
    getPageInfo$(): Observable<any> {
        return this.locationsState.getPageInfo$();
    }

    isLoading$(): Observable<boolean> {
        return this.locationsState.isLoading$();
    }
}