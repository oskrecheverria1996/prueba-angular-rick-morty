import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class LocationsState {
    private listLocations$ = new BehaviorSubject<any>([]);
    private loading$ = new BehaviorSubject<boolean>(false);
    private pageInfo$ = new BehaviorSubject<any>({});
    
    setListLocations(results: any[]) {
        this.listLocations$.next(results);
    }

    getListLocations$() {
        return this.listLocations$.asObservable();
    }

    isLoading$(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    setLoading(isLoading: boolean): void {
        this.loading$.next(isLoading);
    }

    getPageInfo$(): Observable<any> {
        return this.pageInfo$.asObservable();
    }

    setPageInfo(page: any): void {
        this.pageInfo$.next(page);
    }

}