import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(model: string, param: any) {
    return this.http.get(this.apiUrl + model, { params: param });
  }
}
