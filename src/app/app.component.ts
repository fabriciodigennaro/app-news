import { Component } from '@angular/core';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listNews: any[] = [];
  loading = false;
  title = 'news';

  constructor(private _newService: NewService) {}

  searchNews(parameters: any) {
    this.loading = true;
    this.listNews = [];

    setTimeout(() => {
      this._newService.getNews(parameters).subscribe((data) => {
        this.loading = false;
        this.listNews = data.articles;
      }, error => {
        console.log(error);
        this.loading = false
      });
    }, 1000);
  }
}
 