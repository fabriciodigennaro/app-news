import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  constructor(private http: HttpClient) {}

  getNews(parameters: any): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?country=' +
      parameters.country +
      '&category=' +
      parameters.category +
      '&apiKey=974fd95bd6964b178b737621d82d65b2';
    return this.http.get(URL);
  }
}
