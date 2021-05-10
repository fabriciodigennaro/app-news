import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  constructor(private http: HttpClient) {}

  getNews(parameters: any): Observable<any> {
    const URL = environment.news_url + '?country=' +
      parameters.country +
      '&category=' +
      parameters.category;
    return this.http.get(URL);
  }
}
