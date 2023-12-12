import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class CharactersState {
    private listCharacters$ = new BehaviorSubject<any>([]);
    private loading$ = new BehaviorSubject<boolean>(false);
    private pageInfo$ = new BehaviorSubject<any>({});

    setListCharacters(results: any[]) {
        this.listCharacters$.next(results);
    }

    getListCharacters$() {
        return this.listCharacters$.asObservable();
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