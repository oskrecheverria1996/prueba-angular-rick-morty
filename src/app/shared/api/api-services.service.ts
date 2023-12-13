import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter,mergeMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(
    private http: HttpClient,
  ) { }

  fnGetHost() {
    return environment.apiUrl;
  }

  
  fnHttpGetCharacters(page): Observable<any> {
    return this.http.get(this.fnGetHost() + `character?page=${page}`,
      {
        observe: 'response',
        reportProgress: true,
      });
  }

  fnHttpGetLocations(page): Observable<any> {
    return this.http.get(this.fnGetHost() + `location?page=${page}`,
      {
        observe: 'response',
        reportProgress: true,
      });
  }
   
  fnHttpGetEpisodes(page): Observable<any> {
    return this.http.get(this.fnGetHost() + `episode?page=${page}`,
      {
        observe: 'response',
        reportProgress: true,
      });
  }

}
