import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPage } from './news.page';
import { NewsService } from './news.service';
import { HttpClientModule, HttpClient ,HttpHandler} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NewsPage', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsPage, NewsService, HttpClient, HttpHandler]
    });
  });

  it('should be created',inject([NewsService, HttpClient, HttpHandler, NewsPage],(page: NewsPage) =>{
    expect(page).toBeTruthy();
  }));

});
