import { catchError, map } from 'rxjs/operators';
import { SearchService } from './search.service';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SearchResolver implements Resolve<any> {
  errorMessage: Subject<string> = new Subject();
  constructor(private searchService: SearchService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.searchService
      .getUsers(route?.routeConfig.path, route?.queryParams)
      .pipe(
        map((response) => response),
        catchError((error: HttpErrorResponse) => {
          if (error.status) {
            return throwError({ error: error?.message });
          }
        })
      );
  }
}
