import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/empty';
import { switchMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Article } from './news.model';

import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
})
export class NewsPage {

  news: Article[];

  constructor(
    private newsService: NewsService
  ) {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(
      (data: any) => {
        this.news = data;
      }, console.error
    )
  }

  expandItem(article) {
    this.news.map((articles) => {
      if (article == articles) {
        articles.expanded = !articles.expanded;
      } else {
        articles.expanded = false;
      }
      return articles;
    });
  }
}
