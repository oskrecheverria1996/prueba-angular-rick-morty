import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { LocationsFacade } from "./locations.facade";
import { NbDialogService } from '@nebular/theme';
import { SingleLocationComponent } from "./single-location/single-location.component";
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'ngx-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  subscription: Subscription = new Subscription();
  listResult$: Observable<{}>;
  pageInfo$: Observable<any>;
  isLoading$: Observable<boolean>
  totalItems: number = 0;
  current_page = 1;
  
  constructor(
    private locationsFacade: LocationsFacade,
    private dialogService: NbDialogService
  ) { 
    this.listResult$ = this.locationsFacade.getListLocations$();
    this.pageInfo$ = this.locationsFacade.getPageInfo$();
    this.isLoading$ = this.locationsFacade.isLoading$();
    this.subscription.add(
      this.locationsFacade.getLocations(this.current_page)
    )
  }


  ngOnInit(): void {
    this.pageInfo$.pipe(pluck('count')).subscribe(
      (res) => {
        this.totalItems = res;
      }
    )
  }

  changePage(event) {
    this.current_page = event;
    this.locationsFacade.getLocations(this.current_page);
  }
  
  openLocation(location) {
    this.dialogService.open(SingleLocationComponent, {
      context: {location},
    });
  }

}
