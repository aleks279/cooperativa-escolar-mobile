import { NewsService } from './news.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(`NewsService`, () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsService,HttpClient,HttpHandler]
    });
  });

  it('should be created',inject([NewsService,HttpClient,HttpHandler],(service: NewsService) =>{
    expect(service).toBeTruthy();
  }));
  it('should have getNews',inject([NewsService,HttpClient,HttpHandler],(service: NewsService) =>{
    expect(service.getNews).toBeTruthy();
  }));
  it('should have appiUrl',inject([NewsService,HttpClient,HttpHandler],(service: NewsService) =>{
    expect(service.apiUrl).toBeTruthy();
  }));

});
