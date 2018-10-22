import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(`${this.apiUrl}api/v1/articles`)
  }
}
